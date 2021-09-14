import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Comments from "../Comments";
import CommentForm from "../CommentForm"
import LessonVote from "../LessonVote";

function Lesson() {
    let { lessonId } = useParams()
    const lesson = useSelector(state => state.curriculum.lessons[+lessonId])
    const userId = useSelector(state => state.session.user.id)

    return ( lesson && 
        <div className='lesson-page'>
            <div className='lesson-div'>
                <h1>{lesson.name}</h1>
                <p>{lesson.description}</p>
                <p>{lesson.content}</p>
            </div>
            <div className='lesson-comment-div'>
                <h3>Discussion:</h3>
                <CommentForm lessonId={lessonId} userId={userId}/>
                <Comments lessonId={lessonId} userId={userId}/>
            </div>
            <div className='lesson-vote-div'>
                <LessonVote lessonId={lessonId} userId={userId}/>
            </div>
        </div>
    )
}

export default Lesson
