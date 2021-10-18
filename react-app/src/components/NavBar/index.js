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
        history.push("/")
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (!searchQuery.length) return

        setRenderSearchDropdown(false)
        const query = searchQuery
        setSearchQuery("")

        history.push(`/search?q=${query}`)


    }

    return (
        <nav>
            <NavLink to='/' exact={true} activeClassName='active'>
                <img className='logo' src='https://week-20-group-project.s3.amazonaws.com/tmpprogrammatic-new-logo.png' alt="site-logo"/>
            </NavLink>

            <NavLink to='/visualizations' exact={true} activeClassName='active'>
            <span className='visualization-nav-link'>Visualizations</span>
            </NavLink>

            <NavLink to='/courses' exact={true} activeClassName='active'>
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
                    <NavLink to='/profile' exact={true} activeClassName='active'>
                        <img className='nav-prof-img' src={sessionUser.imgUrl} alt='user'/>
                        {/* <i className="fas fa-user fa-2x"></i> */}
                    </NavLink>
                    <LogoutButton />
                </>
            }
            </div>
        </nav>
    );
}

export default NavBar;
