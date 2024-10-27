

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    NodeModel,
    ConnectorModel,
} from "@syncfusion/ej2-react-diagrams";
let nodes: NodeModel[] = [{

    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 100,
    offsetY: 100,
    annotations: [{
        id: 'label1',
        content: 'Start'
    }],
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    }
},
{
    id: 'Init',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 300,
    shape: {
        type: 'Flow',
        shape: 'Process'
    },
    annotations: [{
        content: 'var i = 0;'
    }]
}
];
let connectors: ConnectorModel[] = [{
    // Name of the connector
    id: "connector1",
    // ID of the source and target nodes
    sourceID: "Start",
    targetID: "Init",
    type: 'Orthogonal'
}];
function App() {
    return (
        <DiagramComponent id="container"
            width={
                '100%'
            }
            height={
                '600px'
            }
            nodes={
                nodes
            }
            connectors={
                connectors
            }
            // Defines the default properties for the node
            getNodeDefaults={
                (node: NodeModel) => {
                    node.height = 100;
                    node.width = 100;
                    node.style.fill = '#6BA5D7';
                    node.style.strokeColor = 'white';
                    return node;
                }
            }
        />
    )
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



