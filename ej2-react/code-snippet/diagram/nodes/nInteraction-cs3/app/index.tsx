import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, NodeModel } from '@syncfusion/ej2-react-diagrams';
let diagramInstance: DiagramComponent;
let node: NodeModel[] = [
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
  const reSize = () => {
    diagramInstance.scale(diagramInstance.nodes[0], 0.5, 0.5, { x: 0.5, y: 0.5 });
  };
  return (
    <div>
      <button onClick={reSize}>Resize</button>
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
