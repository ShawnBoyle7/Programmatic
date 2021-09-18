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
        <button onClick={() => setShowModal(true)}>Deactivate Account</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            { sessionUser.id !== 1 ?
                <>
                    <button onClick={handleDelete}>Deactivate</button>
                    <button onClick={() => setShowModal(false)}>Cancel</button>
                </> 
                : 
                <p>You CANNOT delete the Demo User. 😡</p>
            }
        </Modal>
        )}
    </>
    );
}

export default DeleteUserModal;