import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import SearchDropdown from '../SearchDropdown';
import './NavBar.css'

const NavBar = ({sessionUser, authenticated}) => {

    // Tracking user input in a state variable
    const [searchQuery, setSearchQuery] = useState("");
    // State variable for conditional rendering search results
    const [renderSearchDropdown, setRenderSearchDropdown] = useState(false);

    // Tracking user input from the state variable in a use effect because apparently you need it for real time updates
    useEffect(() => {

        // If no user input, don't render search results
        if (!searchQuery.length) return setRenderSearchDropdown(false)

        // If there is user input, we set this state variable to true so that we can render the dropdown results
        setRenderSearchDropdown(true)

        console.log(searchQuery)
    }, [searchQuery]);

    return (
        <nav>
            <NavLink to='/' exact={true} activeClassName='active'>
                Home
            </NavLink>

            <NavLink to='/courses' exact={true} activeClassName='active'>
                Courses
            </NavLink>

            <div className="nav-search-div">
                <input 
                placeholder='Search Here...'
                // Comment this later
                value={searchQuery}
                // Listen to user input and update our state variable on change
                onChange={e => setSearchQuery(e.target.value)}
                />
                {/* If there is user input, render the dropdown results */}
                {renderSearchDropdown && 
                    // Passing props for filtering our query and toggle the rendering of our dropdown results
                    <SearchDropdown searchQuery={searchQuery} setRenderSearchDropdown={setRenderSearchDropdown}/>}
            </div>

            { !authenticated ? 
                <>
                    <LoginFormModal/>
                    <SignUpFormModal />
                </>
                :
                <>
                    Welcome, {sessionUser?.firstName}
                    <NavLink to='/profile' exact={true} activeClassName='active'>
                        Profile
                    </NavLink>
                    <LogoutButton />
                </>
            }
        </nav>
    );
}

export default NavBar;
