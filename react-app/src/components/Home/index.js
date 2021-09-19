import React from "react";
import Splash from "../Splash";
import { useSelector } from 'react-redux'
import LessonDiv from "../LessonDiv";
import "./Home.css"

function Home({authenticated}) {
    const lessons = Object.values(useSelector(state => state.curriculum.lessons))
    const lessonsByPopularity = lessons.sort((a, b) => {
        return b.votes.reduce((accum, vote) => vote.liked ? accum + 1 : accum - 1, 0)
        -
        a.votes.reduce((accum, vote) => vote.liked ? accum + 1 : accum - 1, 0)
    }).splice(0,10);

    return (
        authenticated ? 
        <>
            <h1 className="popular-lessons-header">
                Most Popular Lessons
            </h1>
            <div className="popular-lessons">
                {lessonsByPopularity.map(lesson => 
                    <LessonDiv lesson={lesson} key={lesson.id}/>
                )}
            </div>
        </>
        :
        <Splash />
    )
}

export default Home
