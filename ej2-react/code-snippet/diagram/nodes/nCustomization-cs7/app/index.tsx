import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  DiagramComponent,
  NodeConstraints,
  NodeModel
} from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel[] = [
  {
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
    constraints: NodeConstraints.Default | NodeConstraints.Shadow,
    //shadow added to the node
    shadow: { color: 'skyblue', angle: 90, distance: 10, opacity: 0.8 },
    // Text(label) added to the node
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