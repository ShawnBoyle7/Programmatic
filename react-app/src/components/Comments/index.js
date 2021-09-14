import React from "react";
import { useSelector } from "react-redux";

const Comments = () => {
    const comments = useSelector(state => state.comments)
    const commentsArray = Object.values(comments)
    return (
        <>
            {commentsArray}
        </>
    )
}

export default Comments;