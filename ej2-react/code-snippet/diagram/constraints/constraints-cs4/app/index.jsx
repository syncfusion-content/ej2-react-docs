import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
  DiagramComponent,
  AnnotationConstraints,
} from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
let nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    annotations: [
      {
        content: 'Interaction enabled',
        offset: { x: 0.5, y: 0.1 },
        constraints: AnnotationConstraints.Interaction,
      },
      {
        content: 'ReadOnly enabled',
        offset: { x: 0.2, y: 0.5 },
        constraints: AnnotationConstraints.ReadOnly,
      },
      {
        content: 'Select and drag enabled',
        offset: { x: 0.8, y: 0.5 },
        constraints: AnnotationConstraints.Select | AnnotationConstraints.Drag,
      },
      {
        content: 'Select and rotate enabled',
        offset: { x: 0.5, y: 0.9 },
        constraints:
          AnnotationConstraints.Select | AnnotationConstraints.Rotate,
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
      // Add node
      nodes={nodes}
      getNodeDefaults={(node) => {
        node.height = 200;
        node.width = 300;
        node.style.strokeColor = 'black';
        return node;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);