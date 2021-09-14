import React from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments";
import CommentForm from "../CommentForm"
import { useSelector } from "react-redux";

function Lesson() {
    let { lessonId } = useParams()
    const userId = useSelector(state => state.session.user.id)

    return (
        <>
            <h1>Lesson {lessonId}</h1>
            <CommentForm lessonId={lessonId} userId={userId} />
            <Comments lessonId={lessonId} userId={userId}/>
        </>
    )
}

export default Lesson
