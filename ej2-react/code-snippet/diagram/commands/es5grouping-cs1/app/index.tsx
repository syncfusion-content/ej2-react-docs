import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,NodeModel } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance:DiagramComponent;
//Initializes the nodes
let nodes:NodeModel[] = [{
    id: 'node1',
    width: 100,
    height: 70,
    offsetX: 100,
    offsetY: 100,
},
{
    id: 'node2',
    width: 100,
    height: 70,
    offsetX: 300,
    offsetY: 100,
},
{
    id: 'node3',
    width: 100,
    height: 70,
    offsetX: 200,
    offsetY: 200,

},
{
    id: 'group',
    children: ['node1', 'node2', 'node3', 'connector1'],
},
];
//Initializes the connector
let connector = [{
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
}];

const group = function () {
    diagramInstance.group();
}

const unGroup = function () {
    diagramInstance.unGroup();
}

//Initializes the Diagram component
function App() {
    return (<div>
        <ButtonComponent content="group" onClick={group} />
        <ButtonComponent content="Un Group" onClick={unGroup} />
        <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={nodes} connectors={connector} /></div>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
