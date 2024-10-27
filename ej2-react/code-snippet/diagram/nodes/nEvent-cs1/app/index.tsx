import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  DiagramComponent,
  Node,
  NodeModel,
  Connector,
  ConnectorModel,
  IClickEventArgs
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
    annotations: [
      {
        content: 'Click node',
      },
    ],
  },
];

let connectors: ConnectorModel[] = [
  {
    // Unique name for the connector
    id: 'connector1',
    sourceID: 'Start',
    targetPoint: { x: 250, y: 450 },
    type: 'Orthogonal',
    annotations: [
      {
        content: 'Click Connector',
      },
    ],
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
      connectors={connectors}
      click={(args: IClickEventArgs) => {
        let element: string = 'Diagram';
        if (args.actualObject instanceof Node) {
          element = 'Node';
        }
        if (args.actualObject instanceof Connector) {
          element = 'Connector';
        }
        alert(element + ' clicked');
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);