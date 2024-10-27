import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';
let diagramInstance;
// A node is created and stored in nodes array.
let node = [
  {
    id: 'Start',
    // Position of the node
    offsetX: 250,
    offsetY: 150,
    // Size of the node
    width: 100,
    height: 100,
  },
];
var nodes = [
  {
    id: 'node1',
    offsetX: 140,
    offsetY: 250,
    annotations: [{ content: 'node1' }],
  },
  {
    id: 'node2',
    offsetX: 250,
    offsetY: 250,
    annotations: [{ content: 'node2' }],
  },
  {
    id: 'node3',
    offsetX: 360,
    offsetY: 250,
    annotations: [{ content: 'node3' }],
  },
];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={node}
      collectionChange={(args) => {
        if (args.state === 'Changed') {
          console.log('Collection change');
        }
      }}
      created={() => {
        // Add collection of nodes
        diagramInstance.addElements(nodes);
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);