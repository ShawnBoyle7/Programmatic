// Action type string literal
const LOAD_CURRICULUM = "curriculum/LOAD_CURRICULUM";
const UPDATE_LESSON = "curriculum/UPDATE_LESSON";

// Action creator
const loadCurriculum = (data) => ({
    // Action type
    type: LOAD_CURRICULUM,
    // Payload
    data
});

const updateLesson = (lesson) => ({
    type: UPDATE_LESSON,
    lesson
})

//thunk
export const getCurriculum = () => async (dispatch) => {
    const response = await fetch('/api/courses/');
    const response2 = await fetch('/api/lessons/');
    if (response.ok && response2.ok) {
        const data = {}
        const res = await response.json();
        const res2 = await response2.json();
        data.courses = res.courses;
        data.lessons = res2.lessons;
        dispatch(loadCurriculum(data));
    }
}

export const addVote = (lessonId, userId, liked) => async (dispatch) => {
    console.log('Thunk ------->', liked)
    const response = await fetch('/api/votes/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            lesson_id: lessonId,
            user_id: userId,
            liked
        })
    })
    
    if (response.ok){
        const res = await response.json();
        dispatch(updateLesson(res))
    }
}

export const updateVote = (voteId, liked) => async (dispatch) => {
    const response = await fetch(`/api/votes/${voteId}`, {
        method: "PUT"
    })
    
    if (response.ok){
        const res = await response.json();
        dispatch(updateLesson(res))
    }
}

export const deleteVote = (voteId) => async (dispatch) => {
    const response = await fetch(`/api/votes/${voteId}`, {
        method: "DELETE"
    })
    
    if (response.ok){
        const res = await response.json();
        dispatch(updateLesson(res))
    }
}

const initialState = {courses: {}, lessons: {}}

// Reducer taking in an initial state and action
export default function reducer(state = initialState, action) {
    // Check for case by action type
    // let stateCopy = {...state}
    switch (action.type) {
        case LOAD_CURRICULUM:
            let allCourses = {}
            let allLessons = {}
            // console.log(action.data.courses)
            action.data.courses.forEach(course => {
                allCourses[course.id] = course
            })
            action.data.lessons.forEach(lesson => {
                allLessons[lesson.id] = lesson
            })
            return {
                ...state,
                courses: {...allCourses},
                lessons: {...allLessons}
            }
        case UPDATE_LESSON:
            let stateCopy = {
                ...state,
                courses: {...state.courses},
                lessons: {...state.lessons}
            }
            stateCopy.lessons[action.lesson.id] = action.lesson
            return stateCopy
        default:
            return state
    }
}
