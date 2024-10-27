import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
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
        content: 'Annotation Text',
    }]
}];
// initialize Diagram component
function App() {
    const editAnnotation = () => {
        //Method to edit the annotation programmatically
        diagramInstance.startTextEdit(diagramInstance.nodes[0]);
    };
    return (
        <div>
            <button id="editAnnotation" onClick={editAnnotation}>Edit Annotation</button>
            <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node}/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
