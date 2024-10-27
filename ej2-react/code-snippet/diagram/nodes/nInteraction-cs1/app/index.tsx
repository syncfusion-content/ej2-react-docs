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
  const select = () => {
    diagramInstance.select([diagramInstance.nodes[0]]);
  };
  const unSelect = () => {
    diagramInstance.clearSelection();
  };
  return (
    <div>
      <button onClick={select}>
        Select
      </button>
      <button onClick={unSelect}>
        Un Select
      </button>
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
