import React from "react";

function Profile({ sessionUser }) {
    return (
            sessionUser && 
            <>
                {sessionUser.username}
            </>
    )
}

export default Profile
