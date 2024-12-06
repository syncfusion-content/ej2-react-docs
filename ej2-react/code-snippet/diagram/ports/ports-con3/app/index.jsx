import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, PortVisibility } from "@syncfusion/ej2-react-diagrams";

let connectors = [
    {
      id: 'connector1',
      sourcePoint: { x: 100, y: 200 },
      targetPoint: { x: 100, y: 320 },
      type: 'Orthogonal',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
          //Displacement
          displacement: { x: 50, y: 0 },
          alignment: 'Before',
        },
      ],
    },
    {
      id: 'connector2',
      sourcePoint: { x: 300, y: 200 },
      targetPoint: { x: 500, y: 220 },
      type: 'Orthogonal',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
          //Displacement
          displacement: { x: 0, y: 50 },
          alignment: 'Before',
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
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />); 


