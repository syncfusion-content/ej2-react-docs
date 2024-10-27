

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    NodeModel,
    AnnotationConstraints,
    ConnectorModel
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
    // Sets the multiple annotation for the node
    annotations: [{
            content: 'Left',
            offset: {
                x: 0.12,
                y: 0.1
            }
        },
        {
            content: 'Center',
            offset: {
                x: 0.5,
                y: 0.5
            }
        },
        {
            content: 'Right',
            offset: {
                x: 0.82,
                y: 0.9
            }
        }
    ]
}];
let connector: ConnectorModel[] = [{
    id: 'connector',
    sourcePoint: { x: 200, y: 200 },
    targetPoint: { x: 300, y: 300 },
    // Sets the multiple annotation for the node
    annotations: [
        {
            content: 'connector Top',
            offset: 0.2,
        },
        {
            content: 'connector Center',
            offset: 0.5,
        },
        {
            content: 'connector Bottom',
            offset: 0.8,
        },
    ],
}];
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


