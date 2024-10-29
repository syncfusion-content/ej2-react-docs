import * as React from "react";
import { createRoot } from 'react-dom/client';
import { DiagramComponent, PortVisibility, ConnectorModel} from "@syncfusion/ej2-react-diagrams";

let connectors: ConnectorModel[] = [
    {
      id: 'connector1',
      sourcePoint: { x: 100, y: 200 },
      targetPoint: { x: 300, y: 220 },
      type: 'Orthogonal',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
          alignment: 'Before',
        },
      ],
    },
    {
      id: 'connector2',
      sourcePoint: { x: 320, y: 200 },
      targetPoint: { x: 500, y: 220 },
      type: 'Orthogonal',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
          alignment: 'Center',
        },
      ],
    },
    {
      id: 'connector3',
      sourcePoint: { x: 520, y: 200 },
      targetPoint: { x: 700, y: 220 },
      type: 'Orthogonal',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
          alignment: 'After',
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


