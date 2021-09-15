import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProtectedRoute from '../auth/ProtectedRoute';
import CourseLessons from '../CourseLessons';
import { addToPath } from "../../store/session"

function Courses() {
    const courses = Object.values(useSelector(state => state.curriculum.courses))
    const userId = useSelector(state => state.session.user?.id)
    const userAspirations = useSelector(state => state.session.user.aspirations)
    // when someone clicks the add button,
    //need to iterate through all the lessons in the course to see if any are already part of the learning path.
    //if so, don't add those
    const addToLearningPath = (e) => {
        const userAspirations =Object.values(useSelector(state => state.session.user.aspirations))
        const allLessons = Object.values(curriculum?.lessons)
        const courseLessons = allLessons.filter(lesson => lesson.courseId === course.id)
        courseLessons.forEach((lesson) => {
            if (!userAspirations.find(lesson.id)) {
                dispatch(addToPath(e.target.id, userId, courseId));
            }
        })

    }
    return (
    <>
        <Route exact path='/courses'>
            <div>
                {courses.map(course => {
                    return(
                      <div key={course.id}>
                            <Link to={`/courses/${course.id}`}>{course.name}</Link>
                            <button id={course.id} onClick={addToLearningPath}>Add to Learning Path</button>
                        </div>
                    )

                })
                    }
            </div>
        </Route>
        <ProtectedRoute path='/courses/:courseId'>
            <CourseLessons />
        </ProtectedRoute>
    </>
    );
}

export default Courses;
