

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    NodeModel
} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
  id: 'node1',
  // Position of the node
  offsetX: 100,
  offsetY: 100,
  // Size of the node
  width: 100,
  height: 100,
  // Sets the annotation for the connector
  annotations: [{
          content: 'Task1',
          // Sets the margin for the content
          margin: {
              top: 10
          },
          horizontalAlignment: 'Center',
          verticalAlignment: 'Top',
          offset: {
              x: 0.5,
              y: 1
          }
      }]
}];
let connector: ConnectorModel[] = [
  {
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 500, y: 300 },
    type: 'Orthogonal',
    //Path annotation offset
    annotations: [
      {
        content: 'annotation',
        offset: 0.2,
        margin: { left: 40 },
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
      connectors={connector}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


