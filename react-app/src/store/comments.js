const ADD_COMMENT = "comment/ADD_COMMENT";
const LOAD_COMMENTS = "comment/LOAD_COMMENTS"
const DELETE_COMMENT = "comments/DELETE_COMMENT"

const addComment = (data) => ({
    type: ADD_COMMENT,
    data
});

const loadComments = (data) => ({
    type: LOAD_COMMENTS,
    data
});

const removeComment = (commentId) => ({
    type: DELETE_COMMENT,
    commentId
});

export const getComments = () => async (dispatch) => {
    const response = await fetch("/api/comments/")

    if (response.ok) {
        const data = await response.json();
        dispatch(loadComments(data))
        return null;
    }
};

export const newComment = (content, userId, lessonId) => async (dispatch) => {
    const response = await fetch("/api/comments/", {
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
        dispatch(addComment(data))
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

export const editComment = (content, commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: content
        })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addComment(data))
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

export const deleteComment = (commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    })

    if (response.ok) {
        dispatch(removeComment(commentId))
        return null;
    } else {
        return ["An error occurred. Please try again."]
    }
};


const initialState = {}

export default function reducer(state = initialState, action ) {
    const stateCopy = {...state}
    switch (action.type) {
        case ADD_COMMENT:
            stateCopy[action.data.id] = action.data
            return stateCopy
        case LOAD_COMMENTS:
            action.data.comments.forEach(comment => {
                stateCopy[comment.id] = comment
            });
            return stateCopy
        case DELETE_COMMENT:
            delete stateCopy[+action.commentId]
            return stateCopy;
        default:
            return state;
    };
};