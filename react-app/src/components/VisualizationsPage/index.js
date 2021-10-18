import { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import SelectedVisualization from "../SelectedVisualization";
import './VisualizationsPage.css'

function VisualizationsPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedVisId, setSelectedVisId] = useState('')

    const visualizations = {
        1: 'Dijkstra',
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
            <div id={1} className='visualization-div' onClick={clickHandler}>
                Dijkstra
            </div>
            <div className='visualization-div'>
                test
            </div>
            {showModal && (
                <Modal onClose={onClose}>
                    <SelectedVisualization visualizationId={selectedVisId} />
                </Modal>
            )}
        </>
    )
}

export default VisualizationsPage;
