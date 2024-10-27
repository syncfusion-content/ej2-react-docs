import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
    id: 'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //sets the type of the shape as HTML
    shape: {
        type: 'HTML',
    }
},{
    id: 'node2',
    // Position of the node
    offsetX: 450,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //sets the type of the shape as HTML
    shape: {
        type: 'HTML',
    }
}];
function diagramTemplate(obj) {
    let background = '#6BA5D7';
    let name = 'button';
    if (obj.id === 'node1') {
        background = 'yellow';
        name = 'YELLOW';
    } else {
        name = 'BLUE';
    }
    return (<div style={{ background: background, height: "100%", width: "100%" }}>
    <input type="button" id="button" style={{ width: "100%" }} value={name} />
    </div>);
}
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
        // Add node
        nodes={node}
        nodeTemplate={diagramTemplate.bind(this)}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
