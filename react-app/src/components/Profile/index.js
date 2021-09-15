import React from "react";
import EditUserFormModal from "../EditUserFormModal";
import LearningPath from "../LearningPath";
import DeleteUserModal from "../DeleteUserModal";

function Profile({ sessionUser }) {

    return (
            sessionUser &&
            <>
                <h1>{sessionUser.username}'s Profile</h1>
                <LearningPath />
                <EditUserFormModal/> 
                <DeleteUserModal/>
            </>
    )
}

export default Profile
