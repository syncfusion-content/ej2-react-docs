import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let nodes = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 350,
    }
];
let connectors = [{
        id: "connector1",
        type: 'Orthogonal',
        // Sets the radius for the rounded corner
        cornerRadius: 10,
        sourceID: 'node1',
        targetID: 'node2',
        segments: [{
                type: 'Orthogonal',
                direction: 'Right',
                length: 50
            }],
    }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} getNodeDefaults={(node) => {
            node.height = 100;
            node.width = 100;
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        }} nodes={nodes} connectors={connectors} height={'600px'} 
        >
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);