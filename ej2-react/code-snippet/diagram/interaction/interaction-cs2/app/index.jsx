import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  NodeConstraints,
  DiagramComponent,
} from '@syncfusion/ej2-react-diagrams';
let diagramInstance;
let node = [
  {
    id: 'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    //Enables aspect ratio
    constraints: NodeConstraints.Default | NodeConstraints.AspectRatio,
  },
];
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      nodes={node}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
