import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import EditUserFormModal from "../EditUserFormModal";
import LearningPath from "../LearningPath";
import { deleteUser } from "../../store/session";
import "./Profile.css"

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
                <div className='profile-banner'>
                    <div className='profile-card'>
                        <img className='profile-image' src={sessionUser.imgUrl}/>
                        <EditUserFormModal/>
                        <h3 className='username'>{sessionUser.username}</h3>
                    </div>
                    <div className='profile-details'>
                        <ul>
                            <li className='full-name'>{sessionUser.firstName} {sessionUser.lastName}</li>
                            <li className='email'>{sessionUser.email}</li>
                        </ul>
                    </div>
                </div> 
                <LearningPath />
                <button onClick={renderDelete}>Deactivate Account</button>

                {showDelete &&
                <button onClick={handleDelete}>Confirm Deactivation</button>}
            </>
    )
}

export default Profile
