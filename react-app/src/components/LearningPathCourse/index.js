import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import AspirationDiv from '../AspirationDiv'
import './LearningPathCourse.css'

function LearningPathCourse({ aspirations, idx }) {
    const [renderScrollButton, setRenderScrollButton] = useState(false)
    const courses = useSelector(state => state.curriculum.courses)
    const course = courses[aspirations[0]?.courseId]
    aspirations.sort((a,b) => a.lessonId - b.lessonId)

    const scrollLeft = (e) => {
        document.getElementById(e.currentTarget.value).scrollLeft -= 80;
      }

    const scrollRight = (e) => {
        document.getElementById(e.currentTarget.value).scrollLeft += 80;
    }

    const showScroll = () => {

        const scrollWidth = document.getElementById(`aspirations-div${idx}`)?.scrollWidth
        const divWidth = document.getElementById(`aspirations-div${idx}`)?.clientWidth

        console.log(`${scrollWidth}`)
        console.log(`${divWidth}`)

        if(divWidth < scrollWidth) {
            setRenderScrollButton(true)
        }
    }

    useEffect(()=> {
        showScroll();
    }, [window.innerWidth, showScroll]);

    return ( course &&
        <div className='learning-path-course' >
            <h3 className='course-name'>{`${course.name}`}</h3>
            <div className='aspirations-div' id={`aspirations-div${idx}`}>
                {aspirations.map(aspiration => <AspirationDiv key={aspiration.id} aspiration={aspiration} showScroll={showScroll}/>)}
            </div>
            { renderScrollButton &&
                <>
                    <button id='scroll-left' value={`aspirations-div${idx}`} className='scroll-left' onClick={scrollLeft}>
                        <i className="fas fa-chevron-left fa-6x"></i>
                    </button>
                    <button id='scroll-right' value={`aspirations-div${idx}`} className='scroll-right' onClick={scrollRight}>
                        <i className="fas fa-chevron-right fa-6x"></i>
                    </button>
                </>
            }

        </div>
    );
}

export default LearningPathCourse
