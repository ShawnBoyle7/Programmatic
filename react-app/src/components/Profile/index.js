import React from "react";
import { useSelector } from "react-redux"

function Profile() {
    let sessionUser = useSelector(state => state.session?.user)
    return (
            sessionUser && 
            <>
                {sessionUser.username}
            </>
    )
}

export default Profile
