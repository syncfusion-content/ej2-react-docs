import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
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
                content: 'Annotation'
            }]
    }];
// initialize Diagram component
function App() {
    const removeAnnotation = () => {
        //Method to remove labels at run time
        diagramInstance.removeLabels(diagramInstance.nodes[0], diagramInstance.nodes[0].annotations);
    };
    return (
    <div>
        <button id="removeAnnotation" onClick={removeAnnotation}>remove Annotation</button>
        <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node}/>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);