import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";

function CourseLessons() {
    let { courseId } = useParams()
    const allLessons = Object.values(useSelector(state => state.curriculum.lessons))
    const history = useHistory();
    
    const addToLearningPath = (_e) => {
        dispatch(addToPath(lesson.id));
    }
    const courseLessons = allLessons.map((lesson) => {
        return (
            <li key={lesson.id}>
                <Link to={`/lessons/${lesson.id}`}>{allLessons.find(lesson => lesson.courseId === courseId).name}</Link>
                <button onClick={addToLearningPath}>Add to Learning Path</button>
            </li>
        );
    });
    return (
        <>
            <h1>Specific Course {courseId}</h1>
            <ul>
                {courseLessons}
            </ul>
        </>
    )
}

export default CourseLessons
