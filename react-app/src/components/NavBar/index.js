import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import SearchDropdown from '../SearchDropdown';
import { useDispatch } from "react-redux";
import { demo } from "../../store/session";
import './NavBar.css'

const NavBar = ({sessionUser, authenticated}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    // Tracking user input in a state variable
    const [searchQuery, setSearchQuery] = useState("");
    // State variable for conditional rendering search results
    const [renderSearchDropdown, setRenderSearchDropdown] = useState(false);
    const [renderNavDropdown, setRenderNavDropdown] = useState(false);

    document.querySelector("html").addEventListener("click", () => {
        setRenderNavDropdown(false)
    });

    // Tracking user input from the state variable in a use effect because apparently you need it for real time updates
    useEffect(() => {

        // If no user input, don't render search results
        if (!searchQuery.length) {
            document.querySelector('.fa-search')?.classList.remove('clickable')
            return setRenderSearchDropdown(false)
        }
        // If there is user input, we set this state variable to true so that we can render the dropdown results
        setRenderSearchDropdown(true)
        document.querySelector('.fa-search')?.classList.add('clickable')

    }, [searchQuery]);

    const handleClick = () => {
        if (searchQuery.length) {
            setRenderSearchDropdown(true)
        }
    }

    const handleDemo = () => {
        dispatch(demo(1))
        setRenderNavDropdown(false)
        history.push("/visualizations/")
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (!searchQuery.length) return

        setRenderSearchDropdown(false)
        const query = searchQuery
        setSearchQuery("")

        history.push(`/search?q=${query}`)
    }

    const toggleNavDropdown = (e) => {
        e.stopPropagation()
        setRenderSearchDropdown(false)
        setRenderNavDropdown(!renderNavDropdown)
    }

    const handleSearchDivClick = (e) => {
        e.stopPropagation()
        setRenderNavDropdown(false)
    }

    return (
        <>
            <nav className='full-nav'>
                <NavLink className='home-link' to='/' exact={true} activeClassName='active'>
                    <img className='logo big-logo' src='https://week-20-group-project.s3.amazonaws.com/tmpprogrammatic-new-logo.png' alt="site-logo"/>
                    <img className='logo small-logo' src='https://week-20-group-project.s3.amazonaws.com/tmpprogrammatic-icon.png' alt="site-logo"/>
                </NavLink>

                <NavLink className='visualizations-link' to='/visualizations' exact={true} activeClassName='active'>
                    <span className='visualization-nav-link long'>Visualizations</span>
                    <span className='visualization-nav-link short'>Visuals</span>
                </NavLink>

                <NavLink className='courses-link' to='/courses' exact={true} activeClassName='active'>
                    <span className='course-nav-link'>Courses</span>
                </NavLink>

                <div className="nav-search-div" onClick={e => e.stopPropagation()}>
                    <form className="search-form" onSubmit={submitHandler}>
                        <i className="fas fa-search" onClick={submitHandler}></i>
                        <input
                        placeholder='Search Here...'
                        onClick={handleClick}
                        // Comment this later
                        value={searchQuery}
                        // Listen to user input and update our state variable on change
                        onChange={e => setSearchQuery(e.target.value)}
                        />
                        {/* If there is user input, render the dropdown results */}
                        {renderSearchDropdown &&
                            // Passing props for filtering our query and toggle the rendering of our dropdown results
                            <SearchDropdown searchQuery={searchQuery} setSearchQuery={setSearchQuery} setRenderSearchDropdown={setRenderSearchDropdown}/>}
                    </form>
                </div>

                <div className='nav-auth-div'>
                { !authenticated ?
                    <>
                        <LoginFormModal/>
                        <SignUpFormModal />
                        <button onClick={handleDemo}>Demo</button>
                    </>
                    :
                    <>
                        <span className='welcome'>Welcome, <span className='welcome-name'>{sessionUser?.firstName}</span></span>
                        <NavLink className='profile-link' to='/profile' exact={true} activeClassName='active'>
                            <img className='nav-prof-img' src={sessionUser.imgUrl} alt='user'/>
                            {/* <i className="fas fa-user fa-2x"></i> */}
                        </NavLink>
                        <LogoutButton />
                    </>
                }
                </div>
            </nav>
            <nav className='small-nav'>
                <div className='top-row'>
                    <NavLink className='home-link' to='/' exact={true} activeClassName='active' onClick={e => setRenderNavDropdown(false)}>
                        <img className='logo big-logo' src='https://week-20-group-project.s3.amazonaws.com/tmpprogrammatic-new-logo.png' alt="site-logo"/>
                        <img className='logo small-logo' src='https://week-20-group-project.s3.amazonaws.com/tmpprogrammatic-icon.png' alt="site-logo"/>
                    </NavLink>
                    <div className="nav-search-div" onClick={handleSearchDivClick}>
                        <form className="search-form" onSubmit={submitHandler}>
                            <i className="fas fa-search" onClick={submitHandler}></i>
                            <input
                            placeholder='Search Here...'
                            onClick={handleClick}
                            // Comment this later
                            value={searchQuery}
                            // Listen to user input and update our state variable on change
                            onChange={e => setSearchQuery(e.target.value)}
                            />
                            {/* If there is user input, render the dropdown results */}
                            {renderSearchDropdown &&
                                // Passing props for filtering our query and toggle the rendering of our dropdown results
                                <SearchDropdown searchQuery={searchQuery} setSearchQuery={setSearchQuery} setRenderSearchDropdown={setRenderSearchDropdown}/>}
                        </form>
                    </div>
                    <i className="fas fa-bars fa-2x" onClick={toggleNavDropdown}></i>
                </div>
                { renderNavDropdown &&
                    <div className='nav-dropdown' onClick={e => e.stopPropagation()}>
                        <div className='dropdown-item'>
                            <NavLink className='visualizations-link' to='/visualizations' exact={true} activeClassName='active' onClick={e => setRenderNavDropdown(false)}>
                                Visualizations
                            </NavLink>
                        </div>
                        <div className='dropdown-item'>
                            <NavLink className='courses-link' to='/courses' exact={true} activeClassName='active' onClick={e => setRenderNavDropdown(false)}>
                                Courses
                            </NavLink>
                        </div>
                        { !authenticated &&
                            <>
                                <div className='dropdown-item'>
                                    <LoginFormModal dropdown={true} setRenderNavDropdown={setRenderNavDropdown}/>
                                </div>
                                <div className='dropdown-item'>
                                    <SignUpFormModal dropdown={true} setRenderNavDropdown={setRenderNavDropdown}/>
                                </div>
                                <div className='dropdown-item last-dropdown-item' onClick={handleDemo}>
                                    Demo
                                </div>
                            </>
                        }
                        { authenticated &&
                            <>
                                <div className='dropdown-item'>
                                    <NavLink className='profile-link' to='/profile' exact={true} activeClassName='active' onClick={e => setRenderNavDropdown(false)}>
                                        Profile
                                    </NavLink>
                                </div>
                                <div className='dropdown-item last-dropdown-item'>
                                    <LogoutButton dropdown={true} setRenderNavDropdown={setRenderNavDropdown}/>
                                </div>
                            </>
                        }
                    </div>
                }
            </nav>
        </>
    );
}

export default NavBar;
