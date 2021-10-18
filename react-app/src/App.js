import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import AlgorithmsPage from './components/VisualizationsPage';

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session?.user)
    let authenticated = sessionUser !== null
    const history = useHistory()

    useEffect(() => {
        (async() => {
        await dispatch(authenticate());
        await dispatch(getCurriculum());
        await dispatch(getComments());
        await dispatch(getUsers());
        setLoaded(true);
        })();
        history.listen(()=>{
            document.querySelector('.content').scrollTop = 0
        })
    }, [dispatch, history]);

    if (!loaded) {
        return null;
    }

    return (
        <>
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
                    <Route path='/visualizations'>
                        <AlgorithmsPage />
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
        </>
    );
}

export default App;
