import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
        id: 'node1',
        // Position of the node
        offsetX: 100,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the annotation for the node
        annotations: [{
                content: 'Task1'
            }]
    }, {
        id: 'node2',
        // Position of the node
        offsetX: 300,
        offsetY: 100,
        // Size of the node
        width: 100,
        height: 100,
        // Sets the annotation for the node
        annotations: [{
                content: 'Task2'
            }]
    }];
let connector = [{
        sourceID: 'node1',
        targetID: 'node2',
        type: 'Orthogonal',
        targetDecorator: { shape: 'None' },
        // Sets the annotation for the connector
        annotations: [{
                content: '0',
                // Sets the offset for the content
                offset: 0,
                alignment: 'Before',
            }, {
                content: '1',
                // Sets the offset for the content
                offset: 1,
                alignment: 'After',
            }]
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node} connectors={connector}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
