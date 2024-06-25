{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent }from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
// initialize nodes collection
var node = [
    { id: 'node1', offsetX: 140, offsetY: 250 ,annotations: [{ content: 'node1' }]},
    { id: 'node2', offsetX: 250, offsetY: 250 ,annotations: [{ content: 'node2' }]},
    { id: 'node3', offsetX: 360, offsetY: 250 ,annotations: [{ content: 'node3' }]}
];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'1500px'} height={'600px'}
    getNodeDefaults={(node) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      }}
    created={() => {
            // Add collection of nodes 
            diagramInstance.addElements(node);
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}