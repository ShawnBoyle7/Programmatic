import React from 'react'
import { useSelector } from 'react-redux'
import AspirationDiv from '../AspirationDiv'
import './LearningPathCourse.css'

function LearningPathCourse({ aspirations, idx }) {
    const courses = useSelector(state => state.curriculum.courses)
    const course = courses[aspirations[0]?.courseId]
    aspirations.sort((a,b) => a.lessonId - b.lessonId)

    const scrollLeft = (e) => {
        document.getElementById(e.target.value).scrollLeft -= 50;
      }

    const scrollRight = (e) => {
        document.getElementById(e.target.value).scrollLeft += 50;
    }

    return ( course &&
        <div className='learning-path-course'>
            <h3 className='course-name'>{course.name}</h3>
            <div className='aspirations-div' id={`aspirations-div${idx}`}>
                {aspirations.map(aspiration => <AspirationDiv key={aspiration.id} aspiration={aspiration}/>)}
            </div>
            <button value={`aspirations-div${idx}`} className='scroll-left' onClick={scrollLeft}> Scroll left </button>
            <button value={`aspirations-div${idx}`} className='scroll-right' onClick={scrollRight}> Scroll Right </button>
        </div>
    );
}

export default LearningPathCourse
