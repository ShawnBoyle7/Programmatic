import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from './components/auth/ProtectedRoute';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Courses from './components/Courses';
import Lesson from './components/Lesson';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import { authenticate } from './store/session';
import { getCurriculum } from './store/curriculum';
import { getComments } from './store/comments';
import { getUsers } from './store/users';
import SearchResults from "./components/SearchResults"

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session?.user)
    let authenticated = sessionUser !== null

    useEffect(() => {
        (async() => {
        await dispatch(authenticate());
        await dispatch(getCurriculum());
        await dispatch(getComments());
        await dispatch(getUsers());
        setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    // document.querySelector('body').classList.add("preload")

    // setTimeout(function(){
    //     document.body.className="";
    // },500);

    return (
        <BrowserRouter>
        <NavBar sessionUser={sessionUser} authenticated={authenticated}/>
        <div className='content'>
            <Switch>
                <Route exact path='/' >
                    <Home authenticated={authenticated}/>
                </Route>

                <Route path="/search">
                    <SearchResults/>
                </Route>

                <Route path='/courses'>
                    <Courses />
                </Route>
                <ProtectedRoute path='/lessons/:lessonId'>
                    <Lesson />
                </ProtectedRoute>
                <ProtectedRoute path='/profile'>
                    <Profile sessionUser={sessionUser}/>
                </ProtectedRoute>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </div>
        <Footer />
        </BrowserRouter>
    );
}

export default App;
