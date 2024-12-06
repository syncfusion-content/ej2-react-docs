import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, PortVisibility,NodeModel } from "@syncfusion/ej2-react-diagrams";

let node = [
    {
      id: 'node1',
      offsetX: 100,
      offsetY: 100,
      width: 100,
      height: 100,
      annotations: [{ content: 'margin:{left:50}' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 1, y: 0 },
          visibility: PortVisibility.Visible,
          margin: { left: 50 },
        },
      ],
    },
  ];

function App() {
    return (
       
    <DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node}/>);
} 
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />); 

