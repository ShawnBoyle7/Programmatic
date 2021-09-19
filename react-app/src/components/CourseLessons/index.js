import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LessonDiv from "../LessonDiv"
import "./CourseLessons.css"

function CourseLessons() {
    let { courseId } = useParams()

    const curriculum = useSelector(state => state.curriculum)

    const course = curriculum?.courses[+courseId]
    const allLessons = Object.values(curriculum?.lessons)
    let courseLessons = allLessons.filter(lesson => lesson.courseId === course.id)

    const courseLessonsMap = courseLessons.map((lesson) => <LessonDiv lesson={lesson} key={lesson.id}/>);

    return (
        <>
            <h1 className="course-page-header">{course.name}</h1>
                {courseLessonsMap}
        </>
    )
}

export default CourseLessons
