import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './LoginFormModal';
import SignUpFormModal from './SignUpFormModal';

const NavBar = () => {
    let sessionUser = useSelector(state => state.session.user)
    let authenticated = sessionUser !== null
    console.log("Authenticated ----->", authenticated)

    return (
        <nav>
        <ul>
            <li>
                <NavLink to='/' exact={true} activeClassName='active'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/courses' exact={true} activeClassName='active'>
                    Courses
                </NavLink>
            </li>
            { !authenticated ? 
                <>
                    <li>
                        <LoginFormModal/>
                    </li>
                    <li>
                        <SignUpFormModal />
                    </li>
                </>
                :
                <>
                    <li>
                        Welcome, {sessionUser?.firstName}
                    </li>
                    <li>
                        <NavLink to='/profile' exact={true} activeClassName='active'>
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <LogoutButton />
                    </li>
                </>
            }
        </ul>
        </nav>
    );
}

export default NavBar;
