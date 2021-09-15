import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToPath } from "../../store/session"

const LessonDiv = ({ lesson }) => {

    const dispatch = useDispatch()

    const userId = useSelector(state => state.session.user?.id)

    const addToLearningPath = (e) => {
        dispatch(addToPath(e.target.id, userId));
    }

    const userAspirations = useSelector(state => state.session.user.aspirations)

    const lessonAspiration = userAspirations.find(asp => asp.lessonId === lesson.id)
    
    return (
        <div>
            <Link to={`/lessons/${lesson.id}`}>{lesson.name}</Link>
            { !lessonAspiration &&
                <button id={lesson.id} onClick={addToLearningPath}>Add to Learning Path</button>
            }
        </div>
    );
};

export default LessonDiv;