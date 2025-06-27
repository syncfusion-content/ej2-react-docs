import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, } from "@syncfusion/ej2-react-diagrams";
import { UmlSequenceDiagramModel, SnapConstraints } from "@syncfusion/ej2-diagrams";

// Define the model for the UML Sequence Diagram
const umlSequenceDiagramModel: UmlSequenceDiagramModel = {
  // Define the participants involved in the UML Sequence Diagram
  participants: [
    {
      id: "User", // Unique identifier for the participant
      content: "User", // Label or name of the participant
      isActor: true, // Indicates that the participant is an actor
    },
    {
      id: "System", // Unique identifier for the participant
      content: "System", // Label or name of the participant
      isActor: false,
      showDestructionMarker: true, // Flag to show destruction marker at the end of the lifeline
    }
  ],
};

// initialize Diagram component
function App() {
  return (
    <DiagramComponent id="container"
      width={'100%'} height={'600px'}
      model={umlSequenceDiagramModel}
      snapSettings={{ constraints: SnapConstraints.None }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


