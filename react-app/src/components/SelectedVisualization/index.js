import DijkstraVisualization from "../DijkstraVisualization";

function SelectedVisualization({ visualizationId }) {
    console.log(visualizationId)
    if(+visualizationId === 1) {
        return <DijkstraVisualization/>
    } else {
        return "uh oh"
    }
}
export default SelectedVisualization;
