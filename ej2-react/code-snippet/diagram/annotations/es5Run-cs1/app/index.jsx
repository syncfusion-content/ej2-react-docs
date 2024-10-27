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
}];
let annotation = [{
    id: 'label1',
    content: 'Annotation'
}];
// initialize Diagram component
function App() {
    const addAnnotation = () => {
        //Method to add labels at run time
        diagramInstance.addLabels(diagramInstance.nodes[0], annotation);
        diagramInstance.dataBind();
    };
    return (
        <div>
            <button id="addAnnotation" onClick={addAnnotation}>Add Annotation</button>
            <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node}/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);