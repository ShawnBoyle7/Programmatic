import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToPath } from "../../store/session"
import "./LessonDiv.css"

const LessonDiv = ({ lesson }) => {

    const history = useHistory()
    const dispatch = useDispatch()

    const userId = useSelector(state => state.session.user?.id)

    const addToLearningPath = (e) => {
        e.stopPropagation()
        dispatch(addToPath(e.target.id, userId));
    }

    const userAspirations = useSelector(state => state.session.user.aspirations)

    const lessonAspiration = userAspirations.find(asp => asp.lessonId === lesson.id)

    function animateDiv() {
        const lessonDivArray = Array.from(document.getElementsByClassName('lesson-container'));
        const addAnimatedClass = (e) => {
            e.currentTarget.classList.add('animation');
            e.currentTarget.removeEventListener('mouseover', addAnimatedClass);

        }

        lessonDivArray.forEach(div => {
            div.addEventListener('mouseover', addAnimatedClass);
        })
    }

    useEffect(() => {
        animateDiv()
    },[]);

    return(
        <div className="lesson-container div-transition" onClick={() => history.push(`/lessons/${lesson.id}`)}>
            <div className='lesson-details'>
                <div className="lesson-header">
                    Lesson
                </div>
                <div className="lesson-name">
                    {lesson.name}
                </div>
            </div>
            <div className="lesson-button-div">
                {!lessonAspiration &&
                    <span id={lesson.id} onClick={addToLearningPath}>
                        <i className="far fa-plus-square fa-2x add-btn" ></i>
                        <span>Add to Learning Path</span>
                    </span>
                }
            </div>
        </div>

    )
};

export default LessonDiv;
