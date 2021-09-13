import React from "react";
import { useParams } from "react-router-dom";

function CourseLessons() {
    let { courseId } = useParams()
    return (
        <h1>Specific Course {courseId}</h1>
    )
}

export default CourseLessons
