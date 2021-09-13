import React from "react";
import { Link, useParams } from "react-router-dom";

function CourseLessons() {
    let { courseId } = useParams()
    return (
        <>
            <h1>Specific Course {courseId}</h1>
            <ul>
                <li><Link to='/lessons/1'>Course Lesson 1</Link></li>
                <li><Link to='/lessons/2'>Course Lesson 2</Link></li>
                <li><Link to='/lessons/3'>Course Lesson 3</Link></li>
            </ul>
        </>
    )
}

export default CourseLessons
