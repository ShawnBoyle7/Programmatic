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

// Reducer taking in an initial state and action
export default function reducer(state = initialState, action) {
    // Check for case by action type
    switch (action.type) {
        default:
            return state
    }
}