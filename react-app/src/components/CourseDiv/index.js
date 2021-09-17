import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToPath } from "../../store/session"
import "./CourseDiv.css"

const CourseDiv = ({ course }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const allLessons = Object.values(useSelector(state => state.curriculum.lessons))
    const userId = useSelector(state => state.session.user?.id)
    const userAspirations = useSelector(state => state.session.user?.aspirations)

    // When someone clicks the add button,
    // We need to iterate through all the lessons in the course to see if any are already part of the learning path.
    // If so, don't add those
    const addToLearningPath = (e) => {
        e.stopPropagation()
        const courseId = e.target.id
        const courseLessons = allLessons.filter(lesson => lesson.courseId === +courseId)
        courseLessons.forEach((lesson) => {
            if (!userAspirations?.find(asp => asp.lessonId === lesson.id)) {
                dispatch(addToPath(lesson.id, userId));
            }
        })
    }

    const authenticated = userId !== undefined

    const allLessonsAlreadyOnPath = (courseId) => {
        const courseLessons = allLessons.filter(lesson => lesson.courseId === courseId)
        // Check if all lessons in course are already in asp
        // If so, don't render button
        for (let i = 0; i < courseLessons.length; i++) {
            let lesson = courseLessons[i];
            if(!userAspirations.find(asp => asp.lessonId === lesson.id)){
                return false;
            }
        }
        return true;
    }

    return(
        <div className="course-div" onClick={() => history.push(`/courses/${course.id}`)}>

            <div className="course-header">
                Course
            </div>

            <div className="course-name">
                {course.name}
            </div>

            <div className="lesson-count">
                <span>{course.lessons.length}</span> Lessons
            </div>

            <div className="course-button-div">
                {authenticated && !allLessonsAlreadyOnPath(course.id) &&
                    <button id={course.id} onClick={addToLearningPath}>Add to Learning Path</button>
                }
            </div>

        </div>
    )
};

export default CourseDiv;
