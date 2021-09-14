import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import EditUserFormModal from "../EditUserFormModal";
import LearningPath from "../LearningPath";
import { deleteUser } from "../../store/session";

function Profile({ sessionUser }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [showDelete, setShowDelete] = useState(false)

    const renderDelete = () => {
        setShowDelete(true)
    };

    const handleDelete = () => {
        dispatch(deleteUser(sessionUser.id))
        setShowDelete(false)
        history.push("/")
    };

    return (
            sessionUser &&
            <>
                <h1>{sessionUser.username}'s Profile</h1>
                <EditUserFormModal/> 
                <LearningPath />
                <button onClick={renderDelete}>Deactivate Account</button>

                {showDelete &&
                <button onClick={handleDelete}>Confirm Deactivation</button>}
            </>
    )
}

export default Profile
