import * as React from "react";
import { createRoot } from 'react-dom/client';
import { DiagramComponent, PortVisibility } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance;

let node = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    // Initialize port collection
    ports: [{
        id: 'port1',
        offset: {
            x: 0,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    },
    {
        id: 'port2',
        offset: {
            x: 1,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    },
    {
        id: 'port3',
        offset: {
            x: 0.5,
            y: 0
        },
        visibility: PortVisibility.Visible
    },
    {
        id: 'port4',
        offset: {
            x: 0.5,
            y: 1
        },
        visibility: PortVisibility.Visible
    }
    ]
}];
// initialize Diagram component
let ports = [{
    id: 'port1',
}, {
    id: 'port2',
}, {
    id: 'port3',
}, {
    id: 'port4',
}];

// Method to add ports through run time
const removePort = () => {
    // Parameters:
    // - node: The node from which the ports will be removed.
    // - ports: The collection of ports to be removed from the node.
    diagramInstance.removePorts(diagramInstance.nodes[0], ports);
}

function App() {
    return (
        <div>
            <ButtonComponent content="Remove Port" onClick={removePort} />
            <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node} />
        </div>);
}
const root = createRoot(document.getElementById('diagram'));
root.render(<App />);
