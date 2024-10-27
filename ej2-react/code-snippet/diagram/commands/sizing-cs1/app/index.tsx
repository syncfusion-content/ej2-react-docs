import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,NodeModel } from "@syncfusion/ej2-react-diagrams";
let diagramInstance:DiagramComponent;
let sizeInstance:HTMLSelectElement;
//Initializes the nodes
let node:NodeModel[] = [

    {
        id: 'node1',
        width: 100,
        height: 80,
        offsetX: 140,
        offsetY: 100,
        annotations: [{ content: 'Node1' }],
    },
    {
        id: 'node2',
        width: 100,
        height: 60,
        offsetX: 140,
        offsetY: 200,
        annotations: [{ content: 'Node2' }],
    },
    {
        id: 'node3',
        width: 200,
        height: 30,
        offsetX: 140,
        offsetY: 300,
        annotations: [{ content: 'Node3' }],
    },

];
const sizeChange = function (args) {
    let objects = diagramInstance.nodes;
    /**
     * parameter 1 - The size option
     * parameter 2 - The collection of objects to be scaled.
     */
    diagramInstance.sameSize(args.target.value, objects);
}

//Initializes the Diagram Component
function App() {

    return (
        <div>
            <label>Size option </label>
            <select id="size" onChange={sizeChange} ref={(size) => (sizeInstance = size)}>
                <option value="Width">Width</option>
                <option value="Height">Height</option>
                <option value="Size">Size</option>
            </select>
            <DiagramComponent
                id="container"
                ref={(diagram) => (diagramInstance = diagram)}
                width={'650px'}
                height={'350px'}
                nodes={node}
            /></div>
    );

}

const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);