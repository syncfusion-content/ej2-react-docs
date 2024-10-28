import * as React from "react";
import { createRoot } from 'react-dom/client';
import { DiagramComponent, PortVisibility, PortConstraints, Connector } from "@syncfusion/ej2-react-diagrams";

let nodes = [
  {
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    annotations: [
        { content: 'draw port', offset: { x: 0, y: 0.7 } },
        { content: 'drag port', offset: { x: 1, y: 0.7 } },
    ],
    ports: [
        {
          id: 'p1',
          offset: { x: 0, y: 0.5 },
          visibility: PortVisibility.Visible,
          constraints: PortConstraints.Default | PortConstraints.Draw,
        },
        {
          id: 'p2',
          offset: { x: 1, y: 0.5 },
          visibility: PortVisibility.Visible,
          constraints: PortConstraints.Default | PortConstraints.Drag,
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
    annotations: [
        {
          content: 'draw port',
          alignment: 'After',
          displacement: { x: 0, y: 10 },
        },
        {
          content: 'drag port',
          alignment: 'After',
          offset: 0.7,
          displacement: { x: 0, y: 10 },
        },
    ],
    ports: [
        {
          id: 'p1',
          offset: 0.5,
          visibility: PortVisibility.Visible,
          constraints: PortConstraints.Default | PortConstraints.Draw,
        },
        {
          id: 'p2',
          offset: 0.8,
          visibility: PortVisibility.Visible,
          constraints: PortConstraints.Default | PortConstraints.Drag,
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
      click={(args) => {
        console.log('clicked')
      }}
      positionChange={(args) => {
        console.log('PositionChange')
      }}
      connectionChange={(args) => {
        console.log('connectionChange')
      }}
      elementDraw={(args) => {
        //Prevents connector drawn from connector port
        if (args.state === 'Start' && args.source instanceof Connector) {
        args.cancel = true;
        }
      }}


    />);
}
const root = createRoot(document.getElementById('diagram'));
root.render(<App />);

