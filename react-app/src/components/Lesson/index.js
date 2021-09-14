import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Comments from "../Comments";
import CommentForm from "../CommentForm"
import LessonVote from "../LessonVote";

function Lesson() {
    let { lessonId } = useParams()
    const userId = useSelector(state => state.session.user.id)

    return (
        <>
            <h1>Lesson {lessonId}</h1>
            <CommentForm lessonId={lessonId} userId={userId} />
            <Comments lessonId={lessonId} userId={userId}/>
            <LessonVote lessonId={lessonId}/>
        </>
    )
}

export default Lesson
