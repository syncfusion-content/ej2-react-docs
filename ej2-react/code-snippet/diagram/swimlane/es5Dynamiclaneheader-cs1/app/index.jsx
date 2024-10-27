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
                annotation: { content:'ONLINE PURCHASE STATUS' },
                height: 70, style: { fontSize: 11 }
            },
            lanes: [
                {
                    id: 'stackCanvas1',
                    height: 100,
                    // customization of lane header
                    header: {
                        annotation: { content: 'Online Consumer' },
                        width: 30,
                        style: { fontSize: 11, fill: 'red' },
                    },
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
    // Function to update lane header
    const updateLane = () => {
        let swimlane = diagramInstance.nodes[0];
        swimlane.shape.lanes[0].header.style.fill = 'blue';
        swimlane.shape.lanes[0].header.annotation.style.color = 'white';
        diagramInstance.dataBind();
    };
    return (
        <div>
            <button onClick={updateLane}>updateLane</button>
            <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node} 
        />
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);