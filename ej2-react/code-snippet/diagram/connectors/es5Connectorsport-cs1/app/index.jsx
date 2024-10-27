import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, PortVisibility } from "@syncfusion/ej2-react-diagrams";
let port1 = {
    id:'port1',
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
    },
    shape:'Circle',
    visibility: PortVisibility.Visible,
    offset:{
        x: 1,  y: 0.5
    }
};

let port2 = {
    id:'port2',
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
    },
    shape:'Circle',
    visibility: PortVisibility.Visible,
    offset:{
        x: 0,  y: 0
    }
};
let port3 = {
    id:'ports3',
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
    },
    shape:'Square',
    visibility: PortVisibility.Visible,
    offset:{
        x: 0,  y: 1
    }
};

let nodes = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        ports: [port1]
    },
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        ports: [port2,port3]
    },
];
let connectors = [{
        id: "connector1",
        type:'Orthogonal',
        sourceID: 'node',
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