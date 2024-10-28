import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent, PortVisibility} from "@syncfusion/ej2-react-diagrams";

let node = [{
    offsetX: 250,
    offsetY: 250,
    width: 100,
    height: 100,
    // Initialize port collection
    ports: [{
        // Sets the position for the port
        offset: {
            x: 0.5,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    }]
}];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={node}
      // render initialized Diagram
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);