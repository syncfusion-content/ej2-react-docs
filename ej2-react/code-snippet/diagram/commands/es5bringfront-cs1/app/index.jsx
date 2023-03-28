{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
//Initializes the nodes
let node = [{
        id: 'node1',
        width: 90,
        height: 60,
        offsetX: 100,
        offsetY: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },
    }, {
        id: 'node2',
        width: 90,
        height: 60,
        offsetX: 240,
        offsetY: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },
    }, {
        id: 'node3',
        width: 90,
        height: 60,
        offsetX: 160,
        offsetY: 90,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white',
            strokeWidth: 1
        },
    }];
let selArray = [];
//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="diagram1" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} created={() => {
            selArray.push(diagramInstance.nodes[2]);
            //Selects the nodes
            diagramInstance.select(selArray);
            //Brings to front
            diagramInstance.bringToFront();
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}