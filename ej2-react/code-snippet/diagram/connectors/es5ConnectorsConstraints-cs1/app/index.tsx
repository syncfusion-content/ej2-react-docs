

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    ConnectorConstraints,
    ConnectorModel
} from "@syncfusion/ej2-react-diagrams";
let connectors: ConnectorModel[] = [{
    id: 'connector1',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
    annotations: [{ content: 'Connector Selection disabled' }],
    type: 'Straight',
    sourcePoint: {
      x: 100,
      y: 100,
    },
    targetPoint: {
      x: 200,
      y: 200,
    },
  },
  {
    id: 'connector2',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Drag,
    annotations: [{ content: 'Connector Drag disabled' }],
    type: 'Straight',
    sourcePoint: {
      x: 300,
      y: 100,
    },
    targetPoint: {
      x: 400,
      y: 200,
    },
  },
  {
    id: 'connector3',
    constraints:
      ConnectorConstraints.Default & ~ConnectorConstraints.DragSourceEnd,
    annotations: [{ content: 'Connector Source end disabled' }],
    type: 'Straight',
    sourcePoint: {
      x: 500,
      y: 100,
    },
    targetPoint: {
      x: 600,
      y: 200,
    },
  },
  {
    id: 'connector4',
    constraints:
      ConnectorConstraints.Default & ~ConnectorConstraints.DragTargetEnd,
    annotations: [{ content: 'Connector Target end disabled' }],
    type: 'Straight',
    sourcePoint: {
      x: 700,
      y: 100,
    },
    targetPoint: {
      x: 800,
      y: 200,
    },
  }];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'700px'}
      connectors={connectors}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



