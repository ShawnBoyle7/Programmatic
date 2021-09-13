import React from 'react';
import { Route, Link } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';
import CourseLessons from '../CourseLessons';

function Courses() {

    return (
    <>
        <Route exact path='/courses'>
            <h1>course here</h1>
            <Link to='/courses/1'>Course 1 (example)</Link>
        </Route>
        <ProtectedRoute path='/courses/:courseId'>
            <CourseLessons />
        </ProtectedRoute>
    </>
    );
}

export default Courses;
