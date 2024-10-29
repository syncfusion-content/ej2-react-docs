import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NodeModel, DiagramComponent } from '@syncfusion/ej2-react-diagrams';
let diagramInstance: DiagramComponent;
let node: NodeModel[] = [
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
      //Toggle selection
      selectedItems={{ canToggleSelection: true }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
