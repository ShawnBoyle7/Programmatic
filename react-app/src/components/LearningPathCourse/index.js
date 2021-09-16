import React from 'react'
import { useSelector } from 'react-redux'
import Aspiration from '../Aspiration'

function LearningPathCourse({ aspirations }) {
    const courses = useSelector(state => state.curriculum.courses)
    const course = courses[aspirations[0].courseId]

    return ( course &&
        <div className='learning-path-course'>
            <h3>{course.name}</h3>
            <div className='aspirations-div'>
                {aspirations.map(aspiration => <Aspiration aspiration={aspiration}/>)}
            </div>
        </div>
    )
}

export default LearningPathCourse
