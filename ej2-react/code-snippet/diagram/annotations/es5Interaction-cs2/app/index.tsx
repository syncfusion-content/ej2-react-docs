

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    ConnectorModel,
    AnnotationConstraints
} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let connector: ConnectorModel[] = [{
   id: 'connector',
   type: 'Orthogonal',
   sourcePoint: { x: 200, y: 200 },
   targetPoint: { x: 300, y: 300 },
   annotations: [
      {
        content: 'connector',
        //Enables drag constraints for a connector.
        constraints:AnnotationConstraints.Interaction | AnnotationConstraints.Drag,
        //Set drag limit for a connector annotation.
        dragLimit:{left:20,right:20,top:20,bottom:20}
      }
   ],
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



