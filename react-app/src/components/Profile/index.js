import React from "react";
import EditUserFormModal from "../EditUserFormModal";
import LearningPath from "../LearningPath";

function Profile({ sessionUser }) {
    return (
            sessionUser &&
            <>
                <h1>{sessionUser.username}'s Profile</h1>
                <EditUserFormModal/>
                <LearningPath />
            </>
    )
}

export default Profile
