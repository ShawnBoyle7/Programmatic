import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProtectedRoute from './components/auth/ProtectedRoute';
import NavBar from './components/NavBar';
import Courses from './components/Courses';
import Lesson from './components/Lesson';
import Profile from './components/Profile';
import { authenticate } from './store/session';

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

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
        <NavBar />
        <Switch>
            <Route path='/' exact={true} >
                <h1>My Home Page</h1>
            </Route>
            <Route path='/courses'>
                <Courses />
            </Route>
            <ProtectedRoute path='/lessons/:lessonId'>
                <Lesson />
            </ProtectedRoute>
            <ProtectedRoute path='/profile'>
                <Profile />
            </ProtectedRoute>
        </Switch>
        </BrowserRouter>
    );
}

export default App;
