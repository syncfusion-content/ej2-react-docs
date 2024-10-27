import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, NodeModel } from '@syncfusion/ej2-react-diagrams';
let diagramInstance;
// A node is created and stored in nodes array.
let node: NodeModel[] = [
  {
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 250,
    offsetY: 250,
    minWidth: 50,
    minHeight: 50,
    maxWidth: 200,
    maxHeight: 200,
    annotations: [
      {
        content: 'Node1',
      },
    ],
  },
];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      nodes={node}
      width={'100%'}
      height={'600px'}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);