{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, PortVisibility } from "@syncfusion/ej2-react-diagrams";
let port1 = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
    }
};
port1.shape = 'Circle';
port1.id = 'nodeportnew';
port1.visibility = PortVisibility.Visible;
port1.id = 'port1';
port1.offset = {
    x: 1,
    y: 0.5
};
let port2 = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
    }
};
port2.offset = {
    x: 0,
    y: 0.5
};
port2.id = 'port2';
port2.visibility = PortVisibility.Visible;
port2.shape = 'Circle';
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
        ports: [port2]
    },
];
let connectors = [{
        id: "connector1",
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
{% endraw %}