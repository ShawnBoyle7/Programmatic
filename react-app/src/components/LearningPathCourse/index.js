import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import AspirationDiv from '../AspirationDiv'
import './LearningPathCourse.css'

function LearningPathCourse({ aspirations, idx }) {
    const [renderScrollButton, setRenderScrollButton] = useState(false)
    const [renderScrollLeft, setRenderScrollLeft] = useState(true)
    const [renderScrollRight, setRenderScrollRight] = useState(true)
    const courses = useSelector(state => state.curriculum.courses)
    const course = courses[aspirations[0]?.courseId]
    aspirations.sort((a,b) => a.lessonId - b.lessonId)


    const showScroll = (scrollLeft = document.getElementById(`aspirations-div${idx}`).scrollLeft) => {
        const scrollWidth = document.getElementById(`aspirations-div${idx}`)?.scrollWidth
        const divWidth = document.getElementById(`aspirations-div${idx}`)?.clientWidth

        if(divWidth < scrollWidth) {
            setRenderScrollButton(true)
        } else {
            setRenderScrollButton(false)
        }

        if(scrollLeft === 0) {
            setRenderScrollLeft(false)
        }
        else {
            setRenderScrollLeft(true)
        }
        if(scrollLeft === scrollWidth - divWidth) {
            setRenderScrollRight(false)
        }
        else {
            setRenderScrollRight(true)
        }
    }

    const scroll = (e) => {
        const scrollAmount = e.currentTarget.id === 'scroll-left' ? -212 : 212;

        const scrollWidth = document.getElementById(`aspirations-div${idx}`)?.scrollWidth
        const divWidth = document.getElementById(`aspirations-div${idx}`)?.clientWidth

        const aspirationsDiv = document.getElementById(e.currentTarget.value)

        aspirationsDiv.scrollLeft += scrollAmount;

        let adjustedScrollLeft = aspirationsDiv.scrollLeft + scrollAmount
        if (adjustedScrollLeft < 0 ) adjustedScrollLeft = 0;
        if (adjustedScrollLeft > scrollWidth - divWidth) adjustedScrollLeft = scrollWidth - divWidth;

        showScroll(adjustedScrollLeft)
    }

    // DO NOT PUT ANYTHING IN DEP ARRAY
    useEffect(() => {
        showScroll();
    }, []);

    window.addEventListener('resize', () => {
        if (window.location.href.endsWith("/profile"))
            showScroll();
    })

    return ( course &&
        <div className='learning-path-course' >
            <h3 className='course-name'>{`${course.name}`}</h3>
            
            <div className='buttons-and-path'>
                { renderScrollButton && renderScrollLeft && <button id='scroll-left' value={`aspirations-div${idx}`} className='scroll-btn scroll-left' onClick={scroll}>
                    <i className="fas fa-chevron-left fa-6x"></i>
                </button>}
                <div className='aspirations-div' id={`aspirations-div${idx}`}>
                    {aspirations.map(aspiration => <AspirationDiv key={aspiration.id} aspiration={aspiration} showScroll={showScroll}/>)}
                </div>
                { renderScrollButton && renderScrollRight && <button id='scroll-right' value={`aspirations-div${idx}`} className='scroll-btn scroll-right' onClick={scroll}>
                    <i className="fas fa-chevron-right fa-6x"></i>
                </button>}
            </div>
        </div>
    );
}

export default LearningPathCourse
