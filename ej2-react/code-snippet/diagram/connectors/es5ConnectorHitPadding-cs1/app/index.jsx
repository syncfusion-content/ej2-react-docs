{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing);
let connectors = [{
    // Name of the connector
    id: "connector1",
    type:"Orthogonal",
    //set hit padding
    hitPadding:50,
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 }
}];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={nodes} connectors={connectors}
    getConnectorDefaults={(connector) => {
            connector.constraints =
                ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}