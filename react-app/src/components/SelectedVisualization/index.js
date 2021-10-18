import DijkstraVisualization from "../DijkstraVisualization";

function SelectedVisualization({ visualizationId }) {

    if(visualizationId === 1) {
        return <DijkstraVisualization/>
    }
}
export default SelectedVisualization;
