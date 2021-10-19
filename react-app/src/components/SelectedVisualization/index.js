import DijkstraVisualization from "../DijkstraVisualization";

function SelectedVisualization({ visualizationId }) {

    if(visualizationId === 0) {
        return <DijkstraVisualization/>
    } else {
        console.log(visualizationId)
        return "uh oh"
    }
}
export default SelectedVisualization;
