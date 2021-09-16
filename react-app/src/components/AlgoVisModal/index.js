import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DijkstraVisualization from "../DijkstraVisualization"

function AlgoVisModal({}) {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <button className='algo-vis-modal-btn' onClick={() => setShowModal(true)}>See It In Action!</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <DijkstraVisualization />
        </Modal>
        )}
    </>
    );
}

export default AlgoVisModal;
