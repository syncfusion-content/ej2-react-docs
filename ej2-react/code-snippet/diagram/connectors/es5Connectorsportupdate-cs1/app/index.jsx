import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, PortVisibility, } from '@syncfusion/ej2-react-diagrams';
let port1 = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C',
    },
    shape : 'Circle',
    id :'port',
    visibility : PortVisibility.Visible,
    offset : {
        x: 1,
        y: 1,
    }
};

let port2 = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C',
    },
    shape : 'Circle',
    id :'port1',
    visibility : PortVisibility.Visible,
    offset : {
        x: 0.5,
        y: 1,
    }
};

let port3 = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C',
    },
    shape : 'Circle',
    id :'port2',
    visibility : PortVisibility.Visible,
    offset : {
        x: 1,
        y: 0.5,
    }
}
let port4 = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C',
    },
    shape : 'Circle',
    id :'port2',
    visibility : PortVisibility.Visible,
    offset : {
        x: 1,
        y: 0.5,
    }
}
let nodes = [
    {
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        ports: [port1,port4],
    },
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        ports: [port2, port3],
    },
];
let diagramInstance;
let connectors = [
    {
        id: 'connector1',
        sourcePoint: {
            x: 100,
            y: 100,
        },
        type: 'Orthogonal',
        targetPoint: {
            x: 200,
            y: 200,
        },
        sourceID: 'node',
        targetID: 'node1',
        sourcePortID: 'port',
        targetPortID: 'port1',
    },
];
function App() {
    // Update the target portID at the run time
   const handleCloneClick = () => {
    diagramInstance.connectors[0].sourcePortID = 'port4';
    diagramInstance.connectors[0].targetPortID = 'port2';
    }
    return (
        <div>
        <button  onClick={handleCloneClick}>update</button>
        <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={900} height={900} nodes={nodes}    connectors={connectors} getNodeDefaults={(node) => {
                node.height = 100;
                node.width = 100;
                node.style.fill = '#6BA5D7';
                node.style.strokeColor = 'white';
                return node;
            }}/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);