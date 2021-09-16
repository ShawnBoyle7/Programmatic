import React from "react"
import "./GridCell.css"

const GridCell = ({ row, column, isNode }) => {
    
    return (
        // Class name is row-column so that we can target the specific node for styling
        // Class name is grid-cell to target all of the cells
        <div className={`r${row}c${column} grid-cell ${isNode ? "node" : ""}`}></div>
    )
}

export default GridCell