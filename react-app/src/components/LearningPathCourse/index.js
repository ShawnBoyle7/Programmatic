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

    useEffect(()=>{
        console.log('wow!')
    }, [renderScrollLeft, renderScrollRight])

    const scroll = (e) => {
        const scrollAmount = e.currentTarget.id === 'scroll-left' ? -212 : 212;

        const scrollWidth = document.getElementById(`aspirations-div${idx}`)?.scrollWidth
        const divWidth = document.getElementById(`aspirations-div${idx}`)?.clientWidth

        const aspirationsDiv = document.getElementById(e.currentTarget.value)

        aspirationsDiv.scrollLeft += scrollAmount;
        showScroll()
        // if (aspirationsDiv.scrollLeft === 0) setRenderScrollLeft(false)
        console.log("scrollLeft", document.getElementById(e.currentTarget.value).scrollLeft)
        console.log(`scrollable range -------------> ${scrollWidth - divWidth}`)

    }

    const showScroll = () => {
        const aspirationsDiv = document.getElementById(`aspirations-div${idx}`)
        const scrollWidth = document.getElementById(`aspirations-div${idx}`)?.scrollWidth
        const divWidth = document.getElementById(`aspirations-div${idx}`)?.clientWidth

        if(divWidth < scrollWidth) {
            setRenderScrollButton(true)
        } else {
            setRenderScrollButton(false)
        }

        if(aspirationsDiv.scrollLeft === 0) {
            console.log('left gone')
            setRenderScrollLeft(false)
        }
        else {
            console.log('left render')
            setRenderScrollLeft(true)
        }
        if(aspirationsDiv.scrollLeft === scrollWidth - divWidth) {
            console.log('right gone')
            setRenderScrollRight(false)
        }
        else {
            console.log('right render')
            setRenderScrollRight(true)
        }
    }

    useEffect(()=> {
        showScroll();
    });

    window.addEventListener('resize', () => {
        showScroll()
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
