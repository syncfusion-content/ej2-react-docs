import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
  DiagramComponent,
  NodeModel,
  SnapConstraints,
} from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [
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
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
