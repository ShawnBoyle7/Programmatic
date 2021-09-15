import React from "react";
import EditUserFormModal from "../EditUserFormModal";
import LearningPath from "../LearningPath";
import "./Profile.css"

function Profile({ sessionUser }) {

    return (
            sessionUser &&
            <>
                <div className='profile-banner'>
                    <div className='profile-card'>
                        <img className='profile-image' src={sessionUser.imgUrl} alt={`${sessionUser.username}'s Avatar'`}/>
                        <EditUserFormModal/>
                        <h1 className='username'>{sessionUser.username}</h1>
                    </div>
                    <div className='profile-details'>
                        <ul>
                            <li className='full-name'>{sessionUser.firstName} {sessionUser.lastName}</li>
                            <li className='email'>{sessionUser.email}</li>
                        </ul>
                    </div>
                </div>
                <h1>{sessionUser.username}'s Profile</h1>
                <LearningPath />
            </>
    )
}

export default Profile
