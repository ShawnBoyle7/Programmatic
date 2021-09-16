import React from 'react'
import './DijkstraVisualization.css'
import GridCell from '../GridCell';
const graphNodes = require('../../data/dijkstra_graph_data.json')

function DijkstraVisualization() {

    const checkIfNode = (key) => {
        const node = graphNodes[key]
        return node ? true : false
    }

    const createGrid = () => {
        const gridCells = []
        for (let row = 0; row < 20; row++) {
            for (let column = 0; column < 30; column++) {
                // Every time we push a grid cell, it populates the currently iterated row/column into our class name in the grid cell component
                // gridCells.push(<GridCell row={r} column={c} isNode={nodes.includes(`r${r}c${c}`)}/>)
                gridCells.push(<GridCell row={row} column={column} isNode={checkIfNode(`r${row}c${column}`)}/>)

            }
        }
        return gridCells;
    };

    const createGraph = () => {

    }

    

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

export default DijkstraVisualization
