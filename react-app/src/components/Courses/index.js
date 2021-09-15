import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProtectedRoute from '../auth/ProtectedRoute';
import CourseLessons from '../CourseLessons';
import CourseDiv from '../CourseDiv';

function Courses() {
    const courses = Object.values(useSelector(state => state.curriculum.courses))

    return (
    <>
        <Route exact path='/courses'>
            <div>
                {courses.map(course => <CourseDiv course={course} key={course.id}/>)}
            </div>
        </Route>
        
        <ProtectedRoute path='/courses/:courseId'>
            <CourseLessons />
        </ProtectedRoute>
    </>
    );
}

export default Courses;
