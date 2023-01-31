{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, PortVisibility } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
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
let diagramInstance;
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
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node} created={() => {
            diagramInstance.removePorts(diagramInstance.nodes[0], ports);
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}