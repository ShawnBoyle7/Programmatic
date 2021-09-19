import React from "react";
import DijkstraVisualization from "../DijkstraVisualization";
import "./Splash.css"

function Splash() {

    return (
        <>
            <h2 className="splash-header">Dijkstra's Visualization</h2>
            <DijkstraVisualization/>
        </>
    )
}

export default Splash
