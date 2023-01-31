

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    Inject,
    NodeModel,
    ConnectorModel,
    BpmnShape,
    BpmnSubProcessModel,
    BpmnShapeModel,
    BpmnDiagrams,
    BpmnActivityModel,
    BpmnFlowModel,
    BpmnGatewayModel
} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let connector: ConnectorModel[] = [{
    // Position of the node
    sourcePoint: {
        x: 100,
        y: 200
    },
    targetPoint: {
        x: 300,
        y: 200
    },
    //Sets type of the connector as Orthogonal
    type: 'Orthogonal',
    //Sets type as Bpmn, shape as Association and association as BiDirectional
    shape: {
        type: 'Bpmn',
        flow: 'Association',
        association: 'BiDirectional'
    },
}];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      // Add connector
      connectors={connector}
    >
      <Inject services={[BpmnDiagrams]} />
    </DiagramComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



