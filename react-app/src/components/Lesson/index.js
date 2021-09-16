import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Comments from "../Comments";
import CommentForm from "../CommentForm"
import LessonVote from "../LessonVote";
import AlgoVisModal from "../AlgoVisModal";
import "./Lesson.css"

function Lesson() {
    let { lessonId } = useParams()
    const lesson = useSelector(state => state.curriculum.lessons[+lessonId])
    const userId = useSelector(state => state.session.user.id)

    return ( lesson && 
        <div className='lesson-page'>
            <AlgoVisModal />
            <div className='lesson-div'>
                <h1 className='lesson-name'>{lesson.name}</h1>
                <p className='lesson-description'>{lesson.description}</p>
                <img className='lesson-img' src={lesson.imgUrl} alt={lesson.name}/>
                <p className='lesson-content'>{lesson.content}</p>
            </div>
            <div className='lesson-comment-div'>
                <h2>Discussion:</h2>
                <div className='lesson-comment-container'>
                    <CommentForm lessonId={lessonId} userId={userId}/>
                    <Comments lessonId={lessonId} userId={userId}/>
                </div>
            </div>
            <div className='lesson-vote-div'>
                <LessonVote lessonId={lessonId} userId={userId}/>
            </div>
        </div>
    )
}

export default Lesson
