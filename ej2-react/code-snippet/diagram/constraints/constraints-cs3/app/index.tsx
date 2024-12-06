import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
  DiagramComponent,
  NodeModel,
  PortVisibility,
  PortConstraints,
} from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel[] = [
  {
    id: 'node1',
    // Position of the node
    offsetX: 200,
    offsetY: 200,
    annotations: [
      { content: 'tooltip enabled', offset: { x: 0.5, y: 0.1 } },
      { content: 'draw enabled', offset: { x: 0.2, y: 0.5 } },
      { content: 'drag enabled', offset: { x: 0.8, y: 0.5 } },
      { content: 'InConnect disabled', offset: { x: 0.2, y: 0.9 } },
      { content: 'OutConnect disabled', offset: { x: 0.8, y: 0.9 } },
    ],
    ports: [
      {
        id: 'left',
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Draw,
      },
      {
        id: 'right',
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Drag,
      },
      {
        id: 'top',
        offset: { x: 0.5, y: 0 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.ToolTip,
        tooltip: { content: 'Port tooltip' },
      },
      {
        id: 'bottomLeft',
        offset: { x: 0.2, y: 1 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.InConnect,
      },
      {
        id: 'bottomRight',
        offset: { x: 0.8, y: 1 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect,
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
      // Add node
      nodes={node}
      getNodeDefaults={(node) => {
        node.height = 200;
        node.width = 300;
        node.style.strokeColor = 'black';
        return node;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);