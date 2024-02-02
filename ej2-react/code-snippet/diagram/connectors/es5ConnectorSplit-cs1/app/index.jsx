{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConnectorConstraints,DiagramComponent } from '@syncfusion/ej2-diagrams';
let nodes = [{
        id: 'node1',
        width: 100, height: 100,
        offsetX: 150, offsetY: 150,
        annotations: [{ content: 'node1' }]
    },
    {
        id: 'node2',
        width: 100, height: 100,
        offsetX: 650, offsetY: 150,
        annotations: [{ content: 'node2' }]
    },
    {
        id: 'node3',
        width: 100, height: 100,
        offsetX: 490, offsetY: 290,
        annotations: [{ content: 'node3' }]
    },
];
let connectors = [{
        id: 'connector1', sourceID: "node1", targetID: "node2",
        constraints: ConnectorConstraints.Default | ConnectorConstraints.AllowDrop
    }
];
function App() {
    return (<DiagramComponent id="container" width={1500} height={1000} enableConnectorSplit={true} nodes={nodes} connectors={connectors}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}