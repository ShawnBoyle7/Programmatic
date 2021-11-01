import { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import SelectedVisualization from "../SelectedVisualization";
import './VisualizationsPage.css'

function VisualizationsPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedVisId, setSelectedVisId] = useState('')


    class Visualization {
        constructor(id, algoName, imgUrl) {
            this.id = id;
            this.name = algoName;
            this.imgUrl = imgUrl;
        }
    }

    class VisualizationsList {
        constructor() {
            this.list = [];
        }

        addToList(id, algoName, imgUrl) {
            let vis = new Visualization(id, algoName, imgUrl);
            this.list.push(vis);
        }
    }


    const visualizationsObj = {
        0: {
            id: 0,
            name:`Dijkstra's Search Traversal`,
            imgUrl: 'https://i.imgur.com/EaM1bjN.png'
        },
    };
    const visualizations = new VisualizationsList()
    visualizations.addToList(1, `Dijkstra's Search Traversal`, 'https://i.imgur.com/EaM1bjN.png')
    // const visualization = selectedVisId ? visualizations[selectedVisId] : null

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
    console.log(visualizations)
    return (
        <div className='visualization-container'>
            {visualizations.map(visualization => {
                return (
                    <div id={visualization.id} className='visualization-div' onClick={clickHandler}>
                        <img src={`${visualization.imgUrl}`}></img>
                        <span className='visualization-name'>{visualization.name}</span>
                    </div>
                )

            })}
            {showModal && (
                <Modal onClose={onClose}>
                    <SelectedVisualization visualizationId={selectedVisId} />
                </Modal>
            )}
        </div>
    )
}

export default VisualizationsPage;
