import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';
let diagramInstance;
let node = [
  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Text(label) added to the node
  },
];
// initialize Diagram component
function App() {
  const rotate = () => {
    diagramInstance.rotate(diagramInstance.nodes[0], diagramInstance.nodes[0].rotateAngle + 15);
  };
  return (
    <div>
      <button onClick={rotate}>Rotate</button>
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
        nodes={node}
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
