import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, PortVisibility, PortConstraints } from "@syncfusion/ej2-react-diagrams";

let nodes = [
  {
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    annotations: [{ content: 'Hover over port to see tooltip'}],
    ports: [
      {
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.ToolTip,
        tooltip: { content: 'node port tooltip' },
      },
    ],
  },
];
let connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 120 },
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.ToolTip,
        tooltip: { content: 'connector port tooltip' },
      },
    ],
  },
];
// initialize Diagram component
function App() {
  return (

    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connectors}


  />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

