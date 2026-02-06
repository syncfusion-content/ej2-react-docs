{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DiagramConstraints, NodeConstraints,ConnectorConstraints } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
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
        constraints: NodeConstraints.Default | NodeConstraints.InheritTooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
            //Sets the content of the Tooltip
            content: 'Node1',
        },
    }];
let connector = [{
    id: 'connector1',
    sourcePoint: { x: 300, y: 100 },
    targetPoint: { x: 400, y: 250 },
    tooltip: { content: 'connector' },
    constraints: ConnectorConstraints.Default | ConnectorConstraints.InheritTooltip, 
}]
//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="container" width={'650px'} height={'350px'} constraints={DiagramConstraints.Default | DiagramConstraints.Tooltip} 
    //Defines nodes
    nodes={node} connectors={connector}
     //Defines mouse over tooltip for a node
     tooltip={{
        content: 'DiagramTooltip',
        position: 'BottomRight',
    }}
    />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}