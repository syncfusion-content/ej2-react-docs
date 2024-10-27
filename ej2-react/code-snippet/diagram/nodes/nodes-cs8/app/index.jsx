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
    style: { fill: '#6AA8D7', strokeWidth: 1 },
  },
];
// initialize Diagram component
function App() {
  const clone = () => {
    let selectedNode =
      diagramInstance.selectedItems.nodes.length > 0
        ? diagramInstance.selectedItems.nodes[0]
        : diagramInstance.nodes[0];
    diagramInstance.select([selectedNode]);
    diagramInstance.copy();
    diagramInstance.paste();
  };
  return (
    <div>
      <button onClick={clone}>Clone Node</button>
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        nodes={node}
        width={'100%'}
        height={'600px'}
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
