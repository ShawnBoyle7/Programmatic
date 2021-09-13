// Action type string literal
const LOAD_CURRICULUM = "curriculum/LOAD_CURRICULUM";

// Action creator
const loadCurriculum = (data) => ({
    // Action type
    type: LOAD_CURRICULUM,
    // Payload
    data
});

const initialState = {}

//thunk
export const getCurriculum = () => async (dispatch) => {
    const response = await fetch('/api/courses/');
    if (response.ok) {
        const data = await response.json();
        dispatch(loadCurriculum(data));
    }
}

// Reducer taking in an initial state and action
export default function reducer(state = initialState, action) {
    // Check for case by action type
    switch (action.type) {
        case LOAD_CURRICULUM:
            return action.data
        default:
            return state
    }
}
