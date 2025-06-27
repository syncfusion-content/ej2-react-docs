import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import { SnapConstraints, UmlSequenceMessageType } from "@syncfusion/ej2-diagrams";

// Define the UML Sequence Diagram model with participants and activation boxes
const model = {
  // Defines the participants involved in the sequence diagram
  participants: [
    {
      id: "User",
      content: "User",
      isActor: true,
    },
    {
      id: "System",
      content: "System",
      isActor: false,
      showDestructionMarker: true,
      // Activation boxes for System
      activationBoxes: [
        {
          id: "ActSystem", // Unique identifier for the activation box
          startMessageID: "MSG1", // Message ID that marks the start of the activation
          endMessageID: "MSG2" // Message ID that marks the end of the activation
        }
      ]
    }
  ],
  // Define messages exchanged between participants
  messages: [
    {
      id: "MSG1", content: "Login Request", fromParticipantID: "User", toParticipantID: "System",
      type: UmlSequenceMessageType.Synchronous
    },
    {
      id: "MSG2", content: "Login Response", fromParticipantID: "System", toParticipantID: "User",
      type: UmlSequenceMessageType.Reply
    }
  ],
};

// Initialize Diagram component
function App() {
  return (
    <DiagramComponent id="container"
      width={'100%'} height={'600px'}
      model={model}
      snapSettings={{ constraints: SnapConstraints.None }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
