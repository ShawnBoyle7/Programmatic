import DijkstraVisualization from "../DijkstraVisualization";

function SelectedVisualization({ visualizationId }) {
    if(+visualizationId === 1) {
        return <DijkstraVisualization/>
    } else {
        return "Error retrieving visualization"
    }
}
export default SelectedVisualization;
