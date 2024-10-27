import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';
let diagramInstance;
// A node is created and stored in nodes array.
let node = [
  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: true,
    style: {
      fill: '#6AA8D7',
      strokeColor: 'white',
      strokeWidth: 5,
      strokeDashArray: '3',
      opacity: 0.7,
    },
    // Text(label) added to the node
  },
  {
    // Position of the node
    offsetX: 450,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: false,
    style: {
      fill: '#6AA8D7',
      strokeColor: 'white',
      strokeWidth: 5,
      strokeDashArray: '3',
      opacity: 0.7,
    },
    // Text(label) added to the node
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
