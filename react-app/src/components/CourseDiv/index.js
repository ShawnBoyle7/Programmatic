import React, { useEffect } from 'react';
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

    const addToLearningPath = (e) => {
        e.stopPropagation()
        const courseId = e.currentTarget.id
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
        for (let i = 0; i < courseLessons.length; i++) {
            let lesson = courseLessons[i];
            if (!userAspirations.find(asp => asp.lessonId === lesson.id)) {
                return false;
            }
        }
        return true;
    }

    function animateDiv() {
        const courseDivArray = Array.from(document.getElementsByClassName('course-container'));
        const addAnimatedClass = (e) => {

                e.currentTarget.classList.add('animation');
                e.currentTarget.removeEventListener('mouseover', addAnimatedClass);

        }
        courseDivArray.forEach(div => {
            div.addEventListener('mouseover', addAnimatedClass);
        })

   }

    useEffect(() => {
        animateDiv()
    },[]);

    return (
        <div className="course-container" onClick={() => history.push(`/courses/${course.id}`)}>
            <div className='course-details'>
                <div className="course-header">
                    Course
                </div>

                <div className="course-name">
                    {course.name}
                </div>

                <div className="lesson-count">
                    <span>{course.lessons.length}</span> Lessons
                </div>
            </div>
            <div className="course-button-div">
                {authenticated && !allLessonsAlreadyOnPath(course.id) &&
                    <span id={course.id} onClick={addToLearningPath}>
                       <i className="far fa-plus-square fa-2x add-btn" ></i>
                       <span>Add to Learning Path</span>
                    </span>
                }
            </div>

        </div>
    )
};

export default CourseDiv;
