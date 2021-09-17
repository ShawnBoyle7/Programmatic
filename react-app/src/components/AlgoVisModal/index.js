import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DijkstraVisualization from "../DijkstraVisualization"

function AlgoVisModal() {
    const [showModal, setShowModal] = useState(false);
    
    const onClose = () => {
        if (window.animateTraversalInterval)
            clearInterval(window.animateTraversalInterval)
        if (window.animatePathInterval)
            clearInterval(window.animatePathInterval)
        setShowModal(false)
    }

    return (
    <>
        <button className='algo-vis-modal-btn' onClick={() => setShowModal(true)}>See It In Action!</button>
        {showModal && (
        <Modal onClose={onClose}>
            <DijkstraVisualization />
        </Modal>
        )}
    </>
    );
}

export default AlgoVisModal;
