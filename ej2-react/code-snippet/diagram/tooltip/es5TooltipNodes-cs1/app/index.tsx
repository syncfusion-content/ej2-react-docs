import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DiagramConstraints, NodeConstraints,ConnectorConstraints,NodeModel, } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node:NodeModel[] = [{
        id: "node1",
        width: 100,
        height: 100,
        annotations: [{
                id: 'label',
                content: 'Rectangle',
                offset: {
                    x: 0.5,
                    y: 0.5
                },
                style: {
                    color: 'white'
                },
            }],
        offsetX: 200,
        offsetY: 200,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7'
        },
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
            //Sets the content of the Tooltip
            content: 'Node1',
            //Sets the position of the Tooltip
            position: 'BottomRight',
            //Sets the tooltip position relative to the node
            relativeMode: 'Object'
        },
    }];
let connector = [{
    id: 'connector1',
    sourcePoint: { x: 300, y: 100 },
    targetPoint: { x: 400, y: 250 },
    tooltip: { content: 'connector' },
    constraints: ConnectorConstraints.Default | ConnectorConstraints.Tooltip, 
}]
//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="container" width={'650px'} height={'350px'} constraints={DiagramConstraints.Default | DiagramConstraints.Tooltip} 
    //Defines nodes
    nodes={node} connectors={connector}
    />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
