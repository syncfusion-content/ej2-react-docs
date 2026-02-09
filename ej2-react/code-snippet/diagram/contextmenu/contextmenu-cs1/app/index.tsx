

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,NodeModel,ConnectorModel, DiagramContextMenu, Inject } from "@syncfusion/ej2-react-diagrams";

let diagramInstance: DiagramComponent;
let connector: ConnectorModel[] = [{
        id: 'connector1',
        sourceID: 'node1',
        targetID: 'node2',
        type: 'Straight',
       
}];

let node: NodeModel[] = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{content: 'Rectangle1'}],
    }, {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        annotations: [{content: 'Rectangle2'}],
    }
];

//Initializes the Diagram component
function App() {
        return (<DiagramComponent id="diagram_contextmenu" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} connectors={connector} contextMenuSettings={{
                //Enables the context menu
                show: true,
            }}>
        <Inject services={[DiagramContextMenu]}/>
        </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


