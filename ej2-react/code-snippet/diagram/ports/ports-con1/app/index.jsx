import * as React from "react";
import { createRoot } from 'react-dom/client';
import { DiagramComponent, PortVisibility } from "@syncfusion/ej2-react-diagrams";

let connectors = [
    {
      id: 'connector1',
      sourcePoint: { x: 100, y: 100 },
      targetPoint: { x: 300, y: 100 },
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
        },
      ],
    },
    {
      id: 'connector2',
      sourcePoint: { x: 100, y: 200 },
      targetPoint: { x: 300, y: 220 },
      type: 'Orthogonal',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
        },
      ],
    },
    {
      id: 'connector3',
      sourcePoint: { x: 100, y: 300 },
      targetPoint: { x: 300, y: 340 },
      type: 'Bezier',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
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
      connectors={connectors}
    />);
} 
const root = createRoot(document.getElementById('diagram'));
root.render(<App />); 


