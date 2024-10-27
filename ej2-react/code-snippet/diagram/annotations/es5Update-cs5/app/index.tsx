

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    ConnectorModel
} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let connector: ConnectorModel[] = [{
  sourcePoint: { x: 200, y: 100 },
  targetPoint: { x: 300, y: 200 },
  type: 'Straight',
  //Path annotation offset
  annotations: [{ content: 'annotation', offset: 0.2 }],
}];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      connectors={connector}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



