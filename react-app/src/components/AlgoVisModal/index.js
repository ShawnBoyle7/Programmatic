import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AlgoVis from "../AlgoVis"

function AlgoVisModal() {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <button className='algo-vis-modal-btn' onClick={() => setShowModal(true)}>See It In Action!</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <AlgoVis />
        </Modal>
        )}
    </>
    );
}

export default AlgoVisModal;
