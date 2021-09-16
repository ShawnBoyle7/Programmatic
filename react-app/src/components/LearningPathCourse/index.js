import React from 'react'
import { useSelector } from 'react-redux'
import AspirationDiv from '../AspirationDiv'
import './LearningPathCourse.css'

function LearningPathCourse({ aspirations }) {
    const courses = useSelector(state => state.curriculum.courses)
    const course = courses[aspirations[0]?.courseId]
    return ( course &&
        <div className='learning-path-course'>
            <h3 className='course-name'>{course.name}</h3>
            <div className='aspirations-div'>
                {aspirations.map(aspiration => <AspirationDiv key={aspiration.id} aspiration={aspiration}/>)}
            </div>
        </div>
    );
}

export default LearningPathCourse
