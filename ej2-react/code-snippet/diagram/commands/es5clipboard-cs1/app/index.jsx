{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
//Initializes the connector
let connector = [{
        id: 'connector1',
        sourceID: 'node1',
        targetID: 'node2',
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2,
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        }
    }];
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
    }];
//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} connectors={connector} created={() => {
            diagramInstance.select([
                diagramInstance.nodes[0],
                diagramInstance.nodes[1],
                diagramInstance.connectors[0],
            ]);
            //copies the selected nodes
            diagramInstance.copy();
            //pastes the copied objects
            diagramInstance.paste(diagramInstance.copy());
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}