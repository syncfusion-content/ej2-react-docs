

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
    id: "UmlDiagram",
    //Set node size
    width: 100,
    height: 100,
    //position the node
    offsetX: 200,
    offsetY: 200,
    shape: {
      type: "UmlActivity",
      //Define UmlActivity shape
      shape: "Action"
    }
}];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      // Add node
      nodes={node}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


