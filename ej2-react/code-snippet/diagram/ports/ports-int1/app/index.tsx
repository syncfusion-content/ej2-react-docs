import * as React from "react";
import { createRoot } from 'react-dom/client';
import { DiagramComponent, PortVisibility, PortConstraints, NodeModel, ConnectorModel } from "@syncfusion/ej2-react-diagrams";


let nodes: NodeModel[]= [
  {
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    ports: [
      {
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Draw,
      },
    ],
  },
];
let connectors: ConnectorModel[] = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 120 },
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Draw,
      },
    ],
  },
];
// initialize Diagram component
function App() {
  return (

    <DiagramComponent id="container" width={'100%'} height={'600px'} nodes={nodes} connectors={connectors} />);
}
const root = createRoot(document.getElementById('diagram'));
root.render(<App />);
