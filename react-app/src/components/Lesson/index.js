import React from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments";

function Lesson() {
    let { lessonId } = useParams()

    return (
        <>
            <h1>Lesson {lessonId}</h1>
            <Comments/>
        </>
    )
}

export default Lesson
