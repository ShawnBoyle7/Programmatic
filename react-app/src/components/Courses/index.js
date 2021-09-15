import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProtectedRoute from '../auth/ProtectedRoute';
import CourseLessons from '../CourseLessons';

function Courses() {
    const courses = Object.values(useSelector(state => state.curriculum.courses))

    return (
    <>
        <Route exact path='/courses'>
            <div>
                {courses.map(course =>
                    <div key={course.id}>
                        <Link to={`/courses/${course.id}`}>{course.name}</Link>
                    </div>)}
            </div>
        </Route>
        <ProtectedRoute path='/courses/:courseId'>
            <CourseLessons />
        </ProtectedRoute>
    </>
    );
}

export default Courses;
