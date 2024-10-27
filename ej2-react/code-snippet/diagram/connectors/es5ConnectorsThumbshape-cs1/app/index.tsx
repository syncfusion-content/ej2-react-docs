
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, ConnectorModel, ConnectorEditing, DiagramComponent, ConnectorConstraints } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing);
let connector2: ConnectorModel = {};
    connector2.id = 'connector2';
    // Define the type of the segment
    connector2.type = 'Orthogonal';
    connector2.sourcePoint = { x: 250, y: 250 };
    connector2.targetPoint = { x: 350, y: 350 };
    connector2.segments = [
            {
            type: 'Orthogonal',
            // Defines the direction for the segment lines
            direction: "Right",
            // Defines the length for the segment lines
            length:70 },
            {
            type:'Orthogonal',
            direction: "Bottom",
            length: 20 }];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'900px'}
      height={'500px'}
      connectors={[connector2]}
      segmentThumbShape= 'Arrow' 
      getConnectorDefaults={(connector) => {
        connector.constraints =
          ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

