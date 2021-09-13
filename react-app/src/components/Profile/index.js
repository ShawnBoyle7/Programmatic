import React from "react";

function Profile({ sessionUser }) {
    return (
            sessionUser && 
            <>
                <h1>{sessionUser.username}'s Profile</h1>
            </>
    )
}

export default Profile
