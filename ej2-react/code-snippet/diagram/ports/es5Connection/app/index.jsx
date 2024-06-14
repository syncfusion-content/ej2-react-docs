import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, PortVisibility,PortConnectionDirection } from "@syncfusion/ej2-react-diagrams";
let port1 = {
    style: {
        strokeColor: 'black',
        fill: 'yellow'
    }
};
port1.shape = 'Square';
port1.id = 'nodeportnew';
port1.visibility = PortVisibility.Visible;
//Specifies the connectionDirection
port1.connectionDirection='Right';
port1.id = 'port1';
port1.offset = {
    x: 0.5,
    y: 0.5
};
let port2 = {
    style: {
        strokeColor: 'black',
        fill: 'yellow'
    }
};
port2.offset = {
    x: 0,
    y: 0
};
port2.id = 'port2';
port2.visibility = PortVisibility.Visible;
//Specifies the connectionDirection
port2.connectionDirection='Left';
port2.shape = 'Square';
let nodes = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 600,
        offsetY: 300,
        ports: [port1]
    },
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 800,
        offsetY: 200,
        ports: [port2]
    },
];
let connectors = [{
        id: "connector1",
        sourceID: 'node',
        type: 'Orthogonal',
        targetID: 'node1',
        sourcePortID: 'port1',
        targetPortID: 'port2'
    }];
function App() {
    return (<DiagramComponent id="container" width={900} height={900} nodes={nodes} connectors={connectors} getNodeDefaults={(node) => {
            node.height = 100;
            node.width = 100;
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
