const SET_COMMENT = "COMMENT/SET_COMMENT";

const setComment = (data) => ({
    type: SET_COMMENT,
    data
});

export const newComment = (content, userId, lessonId) => async (dispatch) => {
    const response = await fetch("/api/comments/new_comment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: content,
            user_id: userId,
            lesson_id: lessonId
        })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(setComment(data))
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."]
    }
};

const initialState = {}

export default function reducer(state = initialState, action ) {
    switch (action.type) {
        case SET_COMMENT:
            return { content: action.data.content }
        default:
            return state;
    }
}