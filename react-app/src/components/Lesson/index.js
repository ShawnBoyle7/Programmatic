import React from "react";
import { useParams } from "react-router-dom";

function Lesson() {
    let { lessonId } = useParams()

    return (
        <h1>Lesson {lessonId}</h1>
    )
}

export default Lesson
