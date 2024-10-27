import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";


let nodes= [
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{ content: 'Layer 1 Object Locked' }],
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        annotations: [{ content: 'Layer 2 Object' }],
    },
];
let connectors = [
    {
      id: 'connector1',
      type: 'Straight',
      sourcePoint: {
        x: 100,
        y: 300,
      },
      targetPoint: {
        x: 200,
        y: 400,
      },
      annotations: [{ content: 'Layer 2 Object' }],
    },
  ];

// initialize diagram component
function App() {
return (
<DiagramComponent
  id="container"
  width={'100%'}
  height={'600px'}
  nodes={nodes}
  connectors={connectors}
  // Add layer
  layers = {
        [
            {
                id: 'layer1',
                visible: true,
                objects: ['node1'],
                //Locks the layer1 and prevents any interactions to the objects in layer1
                lock: true,
            },
            {
                id: 'layer2',
                visible: true,
                objects: ['node2', 'connector1'],
                lock: false,
            },
        ]
    }
/>
);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);