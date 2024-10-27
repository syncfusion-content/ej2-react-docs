import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  DiagramComponent,
  SnapConstraints,
} from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
let nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    annotations: [{ content: 'Node 1' }],
  },
  {
    id: 'Node2',
    offsetX: 400,
    offsetY: 200,
    annotations: [{ content: 'Node 2' }],
  },
];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      // Add node
      nodes={nodes}
      snapSettings={{
        constraints:
          SnapConstraints.All &
          ~(SnapConstraints.ShowHorizontalLines | SnapConstraints.SnapToObject),
      }}
      getNodeDefaults={(node) => {
        node.height = 100;
        node.width = 100;
        node.style.strokeColor = 'black';
        return node;
      }}
    />
  );
}
const root = createRoot(document.getElementById('diagram'));
root.render(<App />);