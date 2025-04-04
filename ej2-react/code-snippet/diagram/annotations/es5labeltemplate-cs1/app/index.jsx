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
        // Sets the annotation for the Node
        annotations: [{
                // Set an template for annotation
                template: '<div><input type="button" value="Submit"></div>'
            }]
    }];
let connector = [{
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 400,
            y: 300
        },
        type: 'Orthogonal',
        style: {
            strokeColor: '#6BA5D7'
        },
        // Sets the Annotation for the Connector
        annotations: [{
                // Set an template for annotation
                height: 60, width: 100, 
                template: '<div><input type="button" value="Submit"></div>'
            }]
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node} connectors={connector}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
