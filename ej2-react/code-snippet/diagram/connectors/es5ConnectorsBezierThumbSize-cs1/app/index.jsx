{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, ConnectorConstraints, ConnectorEditing } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing);
let nodes = [
    {
        id: 'node1', width: 100, height: 100, offsetX: 150, offsetY: 150,
    },
    {
        id: 'node2', width: 100, height: 100, offsetX: 350, offsetY: 400,
    },
    {
        id: 'node3', width: 100, height: 100, offsetX: 550, offsetY: 150,
    },
    {
        id: 'node4', width: 100, height: 100, offsetX: 800, offsetY: 400,
    },
];

let connectors = [{
    id: 'connector1',
    type: 'Bezier',
    sourceID: 'node1',
    targetID: 'node2',
    segments: [
        {
            type: 'Bezier',
            point: { x: 200, y: 300 },
        },
        {
            type: 'Bezier',
            point: { x: 320, y: 400 }
        }
    ],
    constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
},
{
    id: 'connector2',
    type: 'Bezier',
    sourceID: 'node3',
    targetID: 'node4',
    segments: [
        {
            type: 'Bezier',
            point: { x: 600, y: 300 },
        },
        {
            type: 'Bezier',
            point: { x: 320, y: 400 }
        }
    ],
    constraints: ConnectorConstraints.Default & ~(ConnectorConstraints.InheritSegmentThumbSize) | ConnectorConstraints.DragSegmentThumb,
    segmentThumbSize: 20
},];
function App() {
    return (<DiagramComponent id="container" width={'900px'} height={'500px'} nodes = {nodes} connectors={connectors}
    segmentThumbSize={15} />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}