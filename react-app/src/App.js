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

function App() {    
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session?.user)
    let authenticated = sessionUser !== null

    useEffect(() => {
        (async() => {
        await dispatch(authenticate());
        setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
        <NavBar sessionUser={sessionUser} authenticated={authenticated}/>
        <Switch>
            <Route path='/' exact={true} >
                <Home authenticated={authenticated}/>
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
        <Footer />
        </BrowserRouter>
    );
}

export default App;
