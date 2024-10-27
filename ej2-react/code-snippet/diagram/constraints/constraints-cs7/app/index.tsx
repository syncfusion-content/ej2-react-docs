import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  DiagramComponent,
  NodeModel,
} from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    annotations: [{ content: 'Node interactions restricted within page' }],
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
      pageSettings={{
        boundaryConstraints: 'Page',
        width: 500,
        height: 500,
        showPageBreaks: true,
        background: { color: 'grey' },
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
