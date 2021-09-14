// Action type string literal
const LOAD_CURRICULUM = "curriculum/LOAD_CURRICULUM";

// Action creator
const loadCurriculum = (data) => ({
    // Action type
    type: LOAD_CURRICULUM,
    // Payload
    data
});

const initialState = {courses: {}, lessons: {}}

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
            // stateCopy.courses = action.data
            // return stateCopy
        default:
            return state
    }
}
