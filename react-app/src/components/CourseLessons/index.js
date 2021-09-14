import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function CourseLessons() {
    let { courseId } = useParams()
    const allLessons = Object.values(useSelector(state => state.curriculum.lessons))

    const courseLessons = allLessons.map((lesson) => {
        return (
            <li key={lesson.id}>
                <Link to={`/lessons/${lesson.id}`}>{allLessons.find(lesson => lesson.courseId === courseId).name}</Link>
            </li>
        );
    });
    return (
        <>
            <h1>Specific Course {courseId}</h1>
            <ul>
                {courseLessons}
            </ul>
        </>
    )
}

export default CourseLessons
