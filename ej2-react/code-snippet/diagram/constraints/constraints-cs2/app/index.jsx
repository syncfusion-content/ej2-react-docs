import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
  DiagramComponent,
  ConnectorConstraints,
} from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
let connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 200, y: 200 },
    type: 'Orthogonal',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
    annotations: [{ content: 'Select disabled', alignment: 'After' }],
  },
  {
    id: 'connector2',
    sourcePoint: { x: 250, y: 100 },
    targetPoint: { x: 350, y: 200 },
    type: 'Orthogonal',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Drag,
    annotations: [{ content: 'Drag disabled', alignment: 'After' }],
  },
  {
    id: 'connector3',
    sourcePoint: { x: 400, y: 100 },
    targetPoint: { x: 500, y: 200 },
    type: 'Orthogonal',
    constraints:
      ConnectorConstraints.Default & ~ConnectorConstraints.DragSourceEnd,
    annotations: [{ content: 'Source end disabled', alignment: 'After' }],
  },
  {
    id: 'connector4',
    sourcePoint: { x: 550, y: 100 },
    targetPoint: { x: 650, y: 200 },
    type: 'Orthogonal',
    constraints:
      ConnectorConstraints.Default & ~ConnectorConstraints.DragTargetEnd,
    annotations: [{ content: 'Target end disabled', alignment: 'After' }],
  },
  {
    id: 'connector5',
    sourcePoint: { x: 700, y: 100 },
    targetPoint: { x: 800, y: 200 },
    type: 'Orthogonal',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Delete,
    annotations: [{ content: 'Delete disabled', alignment: 'After' }],
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
      connectors={connectors}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);