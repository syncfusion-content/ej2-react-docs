import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
let node = [
  {
    id: 'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    zIndex: 2,
    annotations: [{ content: 'Node1' }],
  },
  {
    id: 'node2',
    // Position of the node
    offsetX: 270,
    offsetY: 270,
    // Size of the node
    width: 100,
    height: 100,
    zIndex: 1,
    annotations: [{ content: 'Node2' }],
  },
];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={node}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
