import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Sets the annotation for the node
    annotations: [{
        content: 'Annotation',
    }]
}];
// initialize Diagram component
function App() {
    const textEdit=() => {
        // Handle text-edit event for custom logic
    }
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node} textEdit={textEdit}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);