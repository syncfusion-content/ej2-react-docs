import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, AnnotationConstraints } from "@syncfusion/ej2-react-diagrams";
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
                //Sets the constraints as Interaction
                constraints: AnnotationConstraints.Interaction
            }]
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
