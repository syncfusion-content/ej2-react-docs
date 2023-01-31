{% raw %}
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
        // Flip the node in Horizontal Direction
        flip: 'Horizontal',
        shape: {
            type: 'Basic',
            shape: 'RightTriangle',
        },
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        }
        // Text(label) added to the node
    }];
let diagramInstance;
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node} created={() => {
            diagramInstance.select([diagramInstance.nodes[0]]);
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}