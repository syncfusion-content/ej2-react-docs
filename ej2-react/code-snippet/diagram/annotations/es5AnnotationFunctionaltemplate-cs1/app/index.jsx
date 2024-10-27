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
        id: 'Node', width: 100, height: 50
    }]
}];
let connector = [{
    id: 'connector1',
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 400,
        y: 300
    },
    type: 'Orthogonal',
    // Sets the Annotation for the Connector
    annotations: [{
            // Set an template for annotation
            id: 'Connector', height: 50, width: 100, 
        }]
}];
function diagramTemplate(props) {
    return (<div style={{ width: "100px", height: "100%", overflow: "hidden" }}>
    <input  style={{ width: "100px"}} type = "button" value={props.id}/>
    </div>);
}
// initialize Diagram component
function App() {
    return (
        <DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node} connectors={connector} annotationTemplate={diagramTemplate.bind(this)}/>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
