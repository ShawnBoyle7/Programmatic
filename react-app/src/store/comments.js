const LOAD_COMMENTS = "comments/LOAD_COMMENTS";

const loadComments = (data) => ({
    type: LOAD_COMMENTS,
    data
});

const initialState = {}

export default function reducer(state = initialState, action ) {
    switch (action.type) {
        default:
            return state;
    }
}