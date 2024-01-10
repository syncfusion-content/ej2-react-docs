{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, ConnectorEditing, ConnectorConstraints,PortVisibility,ControlPointsVisibility } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing);
let nodes = [{
        id: 'Start',
        offsetX: 250,
        offsetY: 150,
        annotations: [{ content: 'Start' }],
        ports: [{
                id: 'StartPort',
                visibility: PortVisibility.Visible,
                shape: 'Circle',
                offset: { x: 1, y: 0.5 },
                style: { strokeColor: '#366F8C', fill: '#366F8C' }
            }]
    },
    {
        id: 'End',
        offsetX: 450,
        offsetY: 200,
        annotations: [{ content: 'End' }],
        ports: [{
                id: 'EndPort',
                visibility: PortVisibility.Visible,
                shape: 'Circle',
                offset: { x: 0, y: 0.5 },
                style: { strokeColor: '#366F8C', fill: '#366F8C' }
            }]
    }];
let connectors = [{
        id: "connector1",
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: { shape: 'None' },
        // ID of the source and target nodes
        sourceID: "Start",
        sourcePortID: "StartPort",
        targetID: "End",
        targetPortID: "EndPort",
        type: 'Bezier',
        // Configuring settings for bezier interactions
        bezierSettings : { controlPointsVisibility: ControlPointsVisibility.Source | ControlPointsVisibility.Target }
    }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={nodes} connectors={connectors} getNodeDefaults={(node) => {
            node.height = 100;
            node.width = 100;
            node.shape = { type: 'Basic', shape: 'Rectangle' };
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        }} getConnectorDefaults={(connector) => {
            connector.constraints =
                ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}