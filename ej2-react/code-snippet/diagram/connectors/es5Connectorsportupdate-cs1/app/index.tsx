{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ConnectorModel,
  NodeModel,
  BasicShapeModel,
  PointPortModel,
  Diagram,
  DiagramComponent,
  PortVisibility,
} from '@syncfusion/ej2-react-diagrams';
let port1: PointPortModel = {
  style: {
    strokeColor: '#366F8C',
    fill: '#366F8C',
  },
};
port1.shape = 'Circle';
port1.id = 'nodeportnew';
port1.visibility = PortVisibility.Visible;
port1.id = 'port';
port1.offset = {
  x: 1,
  y: 1,
};
let port2: PointPortModel = {
  style: {
    strokeColor: '#366F8C',
    fill: '#366F8C',
  },
};
port2.offset = {
  x: 1,
  y: 0.5,
};
port2.id = 'port1';
port2.visibility = PortVisibility.Visible;
port2.shape = 'Circle';
let port3: PointPortModel = {
  style: {
    strokeColor: '#366F8C',
    fill: '#366F8C',
  },
};
port3.offset = {
  x: 0,
  y: 1,
};
port3.id = 'newnodeport1';
port3.visibility = PortVisibility.Visible;
port3.shape = 'Circle';
let nodes: NodeModel[] = [
  {
    id: 'node',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    ports: [port1],
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
let diagramInstance: DiagramComponent;
let connectors: ConnectorModel[] = [
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
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
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
// Update the target portID at the run time
diagramInstance.connectors[0].targetPortID = 'newnodeport1';



{% endraw %}