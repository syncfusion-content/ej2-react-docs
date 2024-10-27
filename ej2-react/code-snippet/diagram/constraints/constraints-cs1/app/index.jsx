import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  DiagramComponent,
  NodeConstraints,
} from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
let node = [
  {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    annotations: [{ content: 'Select disabled' }],
    constraints: NodeConstraints.Default & ~NodeConstraints.Select,
  },
  {
    id: 'node2',
    // Position of the node
    offsetX: 250,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    annotations: [{ content: 'Rotate disabled' }],
    constraints: NodeConstraints.Default & ~NodeConstraints.Rotate,
  },
  {
    id: 'node3',
    // Position of the node
    offsetX: 400,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    annotations: [{ content: 'Resize disabled' }],
    constraints: NodeConstraints.Default & ~NodeConstraints.Resize,
  },
  {
    id: 'node4',
    // Position of the node
    offsetX: 550,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    annotations: [{ content: 'Drag disabled' }],
    constraints: NodeConstraints.Default & ~NodeConstraints.Drag,
  },
  {
    id: 'node5',
    // Position of the node
    offsetX: 700,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    annotations: [{ content: 'Tooltip enabled' }],
    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
    tooltip: { content: 'Node Tooltip', relativeMode: 'Object' },
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
      nodes={node}
      getNodeDefaults={(node) => {
        node.height = 100;
        node.width = 100;
        node.shape = { shape: 'Ellipse' };
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      }}
    />
  );
}
const root = createRoot(document.getElementById('diagram'));
root.render(<App />);