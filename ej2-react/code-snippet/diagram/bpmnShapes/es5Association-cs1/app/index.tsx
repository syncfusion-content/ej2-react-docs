

import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent,Inject,ConnectorModel,BpmnDiagrams,
} from "@syncfusion/ej2-react-diagrams";

let connector:ConnectorModel[] = [{
    // Position of the node
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 300,
        y: 100
    },
    //Sets type of the connector as Orthogonal
    type: 'Orthogonal',
    //Sets type as Bpmn,flow  as Association and association as BiDirectional
    shape: {
        type: 'Bpmn',
        flow: 'Association',
        association: 'BiDirectional'
    },
},
{
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
    //Sets type as Bpmn  flow as Association and association as Directional
    shape: {
        type: 'Bpmn',
        flow: 'Association',
        association: 'Directional'
    },
},
{
    // Position of the node
    sourcePoint: {
        x: 100,
        y: 300
    },
    targetPoint: {
        x: 300,
        y: 300
    },
    //Sets type of the connector as Orthogonal
    type: 'Orthogonal',
    //Sets type as Bpmn shape, flow as Association and association as Default
    shape: {
        type: 'Bpmn',
        flow: 'Association',
        association: 'Default'
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



