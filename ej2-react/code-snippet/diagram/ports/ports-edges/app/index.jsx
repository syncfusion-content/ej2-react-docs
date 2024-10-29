import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,PortVisibility} from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

let diagramInstance;

let nodes = [
  {
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    ports: [
      {
        id: 'port1',
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Visible,
      },
      {
        id: 'port2',
        offset: { x: 0.5, y: 0 },
        visibility: PortVisibility.Visible,
      },
    ],
  },
  {
    id: 'node2',
    offsetX: 250,
    offsetY: 400,
    width: 100,
    height: 100,
    ports: [
      {
        id: 'port3',
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Visible,
      },
      {
        id: 'port4',
        offset: { x: 0.5, y: 1 },
        visibility: PortVisibility.Visible,
      },
    ],
  },
];

let connectors = [
  {
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    type: 'Orthogonal',
    sourcePortID: 'port1',
    targetPortID: 'port3',
    annotations: [{ content: 'connector1' }],
  },
  {
    id: 'connector2',
    sourceID: 'node2',
    targetID: 'node1',
    type: 'Orthogonal',
    sourcePortID: 'port4',
    targetPortID: 'port2',
    annotations: [{ content: 'connector2' }],
  },
];


// Method for inEdges
const inEdges = () => {
  let port1 = diagramInstance.nodes[0].ports[1];
  console.log(port1.inEdges[0]);
}

// Method for outEdges
const outEdges = () => {
  let port1 = diagramInstance.nodes[0].ports[0];
  console.log(port1.outEdges[0]);
}

// initialize Diagram component
function App() {
  return (
    <div>
      <ButtonComponent content="In Edges" onClick={inEdges} />
      <ButtonComponent content="Out Edges" onClick={outEdges} />
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
        nodes={nodes}
        connectors={connectors}
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
