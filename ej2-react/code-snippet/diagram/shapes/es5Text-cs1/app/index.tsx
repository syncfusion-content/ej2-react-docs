

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    NodeModel,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type of the shape as text
    shape: {
        type: 'Text',
        content: 'Text Element'
    },
    //Customizes the appearances such as fill.
    style: {
        fill: 'none',
    }
}];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      ref={(diagram) => (diagramInstance = diagram)}
      // Add node
      nodes={node}
      created={() => {
        diagramInstance.select([diagramInstance.nodes[0]]);
      }}
      // render initialized Diagram
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



