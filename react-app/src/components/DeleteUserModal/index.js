import React, { useState } from "react";
import { deleteUser } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import { useHistory } from "react-router-dom"

function DeleteUserModal() {
    const dispatch = useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user)

    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        dispatch(deleteUser(sessionUser.id))
        setShowModal(false)
        history.push("/")
    };

    return (
    <>
        <button className='cancel-button deactivate-button' onClick={() => setShowModal(true)}>Deactivate Account</button>
        {showModal && (
        <Modal className='delete-user-modal' onClose={() => setShowModal(false)}>
            { sessionUser.id !== 1 ?
                <div>
                    <p>Are you sure you want to delete your account?</p>
                    <div>
                        <button onClick={handleDelete}>Delete</button>
                        <button className='cancel-button' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
                :
                <p>You cannot delete the Demo user!</p>
            }
        </Modal>
        )}
    </>
    );
}

export default DeleteUserModal;
