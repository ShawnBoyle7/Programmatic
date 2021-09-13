import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';
import CourseLessons from '../CourseLessons';

function Courses() {

    return (
    <>
        <Route exact path='/courses'>
            <h1>Courses</h1>
        </Route>
        <ProtectedRoute path='/courses/:courseId'>
            <CourseLessons />
        </ProtectedRoute>
    </>
    );
}

export default Courses;
