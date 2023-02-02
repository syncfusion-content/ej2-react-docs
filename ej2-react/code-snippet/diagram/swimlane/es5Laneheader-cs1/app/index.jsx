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
                annotation: { content: 'ONLINE PURCHASE STATUS', style: { fill: 'transparent' } },
                height: 50, style: { fontSize: 11 },
            },
            // Intialize lane to swimlane
            lanes: [
                {
                    id: 'stackCanvas1',
                    height: 100,
                    // Intialize header to lane
                    header: {
                        annotation: { content: 'CUSTOMER' }, width: 50,
                        style: { fontSize: 11 }
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
        // Text(label) added to the node
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
