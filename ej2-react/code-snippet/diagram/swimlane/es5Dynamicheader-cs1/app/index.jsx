import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
        shape: {
            type: 'SwimLane',
            orientation: 'Horizontal',
            // Intialize header to swimlane
            header: {
                annotation: { content: 'SALES PROCESS FLOW CHART', },
                height: 70, style: { fontSize: 11 }, style: { fill: 'pink' },
            },
            lanes: [
                {
                    id: 'stackCanvas1',
                    height: 100,
                },
            ],
            phases: [
                {
                    id: 'phase1', offset: 170,
                    header: { annotation: { content: 'Phase' } }
                },
            ],
            phaseSize: 20,
        },
        offsetX: 300, offsetY: 200,
        height: 200,
        width: 350
    }];
// initialize Diagram component
let diagramInstance;
function App() {
    const updateHeaderStyle = () => {
        if (diagramInstance) {
            // change the swimlane header style dynamically
            diagramInstance.nodes[0].shape.header.style.fill = 'red';
            // Refresh the diagram
            diagramInstance.dataBind(); 
        }
    };
    return ( 
        <div>
            <button onClick={updateHeaderStyle}>updateHeaderStyle</button>
            <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node} /> 
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
