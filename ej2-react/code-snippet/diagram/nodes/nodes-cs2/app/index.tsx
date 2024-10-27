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
  },
];
// initialize Diagram component
function App() {
  const add = () => {
    diagramInstance.add(node[0]);
  };
  const remove = () => {
    diagramInstance.remove(diagramInstance.nodes[0]);
  };
  return (
    <div>
      <button onClick={add}>Add Node</button>
      <button onClick={remove}>Remove Node</button>
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
