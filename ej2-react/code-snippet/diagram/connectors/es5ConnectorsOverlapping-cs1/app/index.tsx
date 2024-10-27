import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ConnectorModel,
    NodeModel,
    DiagramComponent,
    BasicShapeModel,
    PointPortModel,
    Diagram,
    PortVisibility
} from "@syncfusion/ej2-react-diagrams";
let nodeport: PointPortModel = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
        }
    };
    nodeport.shape = 'Circle';
    nodeport.visibility = PortVisibility.Visible
    nodeport.id = 'port';
    nodeport.offset = {
        x: 0,
        y: 0.5
    };
let port2: PointPortModel = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
        }
    }
    port2.offset = {
        x: 0,
        y: 0.5
    };
    port2.id = 'port1';
    port2.visibility = PortVisibility.Visible
    port2.shape = 'Circle';
let nodes: NodeModel[] = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        ports: [nodeport]
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
let connectors: ConnectorModel[] = [{
    id: "connector1",
    type: 'Orthogonal',
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
    sourceID: 'node',
    targetID: 'node1',
    sourcePortID: 'port',
    targetPortID: 'port1'
}];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={900}
      height={900}
      nodes={nodes}
      connectors={connectors}
      getNodeDefaults={(node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);