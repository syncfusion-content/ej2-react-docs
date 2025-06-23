import * as React from 'react';
import * as ReactDOM from "react-dom";
import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';

let diagramInstance;
// Define a collection of nodes used in the diagram
// Define a collection of nodes used in the diagram
let nodes = [
  // First rectangle node
  {
    id: 'node1',
    // Margin from the left and top
    margin: { left: 50, top: 30 },
    width: 100, height: 100,
    style: { fill: 'white', strokeColor: '#2546BB', strokeWidth: 1 },
    shape: { type: 'Basic', shape: 'Rectangle', cornerRadius: 4 },
    annotations: [{ content: 'Node 1' }]
  },
  // Second rectangle node
  {
    id: 'node2',
    // Margin from the left and top
    margin: { left: 200, top: 130 },
    width: 100, height: 100,
    style: { fill: 'white', strokeColor: '#2546BB', strokeWidth: 1 },
    shape: { type: 'Basic', shape: 'Rectangle', cornerRadius: 4 },
    annotations: [{ content: 'Node 2' }]
  },
  // Container node configuration to contain node1 and node2
  {
    id: 'container',
    width: 350, height: 280, // Width and height of the container
    offsetX: 250, offsetY: 250, // Position of the container
    shape: {
      // Define the type as a container
      type: 'Container',
      // Includes node1 and node2 as children
      children: ['node1', 'node2'],
    },
    // Style properties for the container
    style: { fill: '#E9EEFF', strokeColor: '#2546BB', strokeWidth: 1 }
  },
];

// initialize Diagram component
function App() {
  return (
    <DiagramComponent id="divcontainer" ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'} height={'500px'}
      nodes={nodes} created={() => {
        diagramInstance.select([diagramInstance.getObject('container')]);
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);