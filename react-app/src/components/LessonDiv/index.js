import React from "react";
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

    return(
        <div className="lesson-container div-transition" onClick={() => history.push(`/lessons/${lesson.id}`)}>

            <div className="lesson-header">
                Lesson
            </div>

            <div className="lesson-name">
                {lesson.name}
            </div>

            <div className="lesson-button-div">
                {!lessonAspiration &&
                    <button id={lesson.id} onClick={addToLearningPath}>Add to Learning Path</button>
                }
            </div>
        </div>

    )

    {/* // return (
    //     <div>
    //         <Link to={`/lessons/${lesson.id}`}>{lesson.name}</Link>
    //         { !lessonAspiration &&
                <button id={lesson.id} onClick={addToLearningPath}>Add to Learning Path</button>
            }
        </div>
    ); */}
};

export default LessonDiv;
