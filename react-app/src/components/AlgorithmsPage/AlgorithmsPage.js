import { useState } from "react";

function AlgorithmsPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedAlgoId, setSelectedAlgoId] = useState('')

    const algorithms = {
        1: 'dijkstra',
        2: 'test'
    };
    const algorithm = selectedAlgoId ? algorithms[selectedAlgoId] : null

    const clickHandler = (e) => {
        setSelectedAlgoId(+e.target.id);
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
        const courseDivArray = Array.from(document.getElementsByClassName('algorithm-div'));
        const addAnimatedClass = (e) => {

                e.currentTarget.classList.add('animation');
                e.currentTarget.removeEventListener('mouseover', addAnimatedClass);

        }
        courseDivArray.forEach(div => {
            div.addEventListener('mouseover', addAnimatedClass);
        })
    }

    useEffect(() => {
        animateDiv()
    },[]);

    return (
        <>
            <div className='algorithm-div' onClick={clickHandler}>

            </div>
            <div className='algorithm-div'>

            </div>
            {showModal && (
                <Modal onClose={onClose}>
                    
                </Modal>
            )
            }
        </>
    )
}

export default AlgorithmsPage;
