import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import './NavBar.css'

const NavBar = ({sessionUser, authenticated}) => {

    return (
        <nav>
            <NavLink to='/' exact={true} activeClassName='active'>
                Home
            </NavLink>

            <NavLink to='/courses' exact={true} activeClassName='active'>
                Courses
            </NavLink>

            <div>
                <input placeholder='Search Here...'/>
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
