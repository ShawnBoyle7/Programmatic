import React from 'react'
import './AlgoVis.css'
import GridCell from '../GridCell';

function AlgoVis() {

    const createGrid = () => {
        const nodes = ["r7c3", "r7c9", "r3c9", "r5c12", ""]
        const gridCells = []
        for (let r = 0; r < 10; r++) {
            for (let c = 0; c < 15; c++) {
                // Every time we push a grid cell, it populates the currently iterated row/column into our class name in the grid cell component
                gridCells.push(<GridCell row={r} column={c} isNode={nodes.includes(`r${r}c${c}`)}/>)
            }
        }
        return gridCells;
    };

    // document.querySelector(".r2c4")?.classList.add("node")

    return (
        // Targets entire modal
        <div className='algo-vis-div'>
            {/* <h1>Algo Vis</h1> */}
            {/* Targets entire grid element contianing all grid cells */}
            <div className="grid-container">
                {createGrid()}
            </div>
        </div>
    )
}

export default AlgoVis
