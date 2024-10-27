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
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
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
      mouseEnter={(args) => {
        (args.actualObject).style.fill = 'red';
      }}
      mouseOver={(args) => {
        //Customize
      }}
      mouseLeave={(args) => {
        (args.element).style.fill = 'none';
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
