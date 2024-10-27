import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  DiagramComponent,
  NodeModel,
  ISizeChangeEventArgs
} from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel[] = [
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
      width={'100%'}
      height={'600px'}
      nodes={node}
      sizeChange={(args: ISizeChangeEventArgs) => {
        if (args.state === 'Completed') {
          console.log('Size change');
        }
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
