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
        content: 'Annotation',
    }]
}];
let color = 'pink';
// initialize Diagram component
function App() {
    const keyup=() => {
        if (color === 'pink') {
            color = 'yellow';
            diagramInstance.nodes[0].style.fill = 'red';
            diagramInstance.dataBind();
        } else {
            color = 'pink';
            diagramInstance.nodes[0].style.fill = 'pink';
            diagramInstance.dataBind();
        }
    }
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node} keyUp={keyup}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
