import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, SnapConstraints, Snapping } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(Snapping);
let snapSettings = {
    // Enables the object to snap with both horizontal and Vertical gridlines
    constraints: SnapConstraints.SnapToLines | SnapConstraints.ShowLines
};
// A node is created and stored in nodes array.
let node = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Add node
    nodes={node} snapSettings={snapSettings}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
