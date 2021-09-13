import React from "react";
import EditUserFormModal from "../EditUserFormModal";

function Profile({ sessionUser }) {
    return (
            sessionUser && 
            <>
                <h1>{sessionUser.username}'s Profile</h1>
                <EditUserFormModal/>
            </>
    )
}

export default Profile
