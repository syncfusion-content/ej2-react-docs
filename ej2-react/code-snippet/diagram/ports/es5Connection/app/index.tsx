{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ConnectorModel,
    NodeModel,
    BasicShapeModel,
    PointPortModel,
    Diagram,
    DiagramComponent,
    PortVisibility,
    connectionDirection
} from "@syncfusion/ej2-react-diagrams";
let port1: PointPortModel = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
        }
    };
    port1.shape = 'Square';
    port1.id = 'nodeportnew';
    port1.visibility = PortVisibility.Visible;
    //specify the connectionDirection of the Port
    port1.connectionDirection='Right';
    port1.id = 'port1';
    port1.offset = {
        x: 0.5,
        y: 0.5
    };
let port2: PointPortModel = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
        }
    };
    port2.offset = {
        x: 0,
        y: 0
    };
    port2.id = 'port2';
    port2.visibility = PortVisibility.Visible;
    //specify the connectionDirection of the Port
    port2.connectionDirection='Left';
    port2.shape = 'Square';
let nodes: NodeModel[] = [{
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
let connectors: ConnectorModel[] = [{
    id: "connector1",
    sourceID: 'node',
    targetID: 'node1',
    sourcePortID: 'port1',
    targetPortID: 'port2'
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



{% endraw %}