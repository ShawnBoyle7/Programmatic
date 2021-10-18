import { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";

function VisualizationsPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedVisId, setSelectedVisId] = useState('')

    const visualizations = {
        1: 'DijkstraVisualization',
        2: 'test'
    };
    const visualization = selectedVisId ? visualizations[selectedVisId] : null

    const clickHandler = (e) => {
        setSelectedVisId(+e.target.id);
        setShowModal(true);
    }

    const onClose = () => {
        if (window.animateTraversalInterval)
            clearInterval(window.animateTraversalInterval)
        if (window.animatePathInterval)
            clearInterval(window.animatePathInterval)
        setShowModal(false)
    }

    function animateDiv() {
        const visualizationDivArray = Array.from(document.getElementsByClassName('visualization-div'));
        const addAnimatedClass = (e) => {

                e.currentTarget.classList.add('animation');
                e.currentTarget.removeEventListener('mouseover', addAnimatedClass);

        }
        visualizationDivArray.forEach(div => {
            div.addEventListener('mouseover', addAnimatedClass);
        })
    }

    useEffect(() => {
        animateDiv()
    },[]);

    return (
        <>
            <div className='visualization-div' onClick={clickHandler}>

            </div>
            <div className='visualization-div'>

            </div>
            {showModal && (
                <Modal onClose={onClose}>

                </Modal>
            )}
        </>
    )
}

export default VisualizationsPage;
