import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
    ConnectorModel,ConnectorConstraints,ConnectorEditing
} from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing);
let connectors: ConnectorModel[] = [{
    // Name of the connector
    id: "connector1",
    type:"Orthogonal",
    //set hit padding
    hitPadding:50,
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 }
}];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      connectors={connectors}
      getConnectorDefaults={(connector: ConnectorModel) => {
        connector.constraints =
          ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);