

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    NodeModel,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
  id: 'node1',
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  //sets the type of the shape as HTML
  shape: {
      type: 'HTML',
  }
},{
  id: 'node2',
  // Position of the node
  offsetX: 450,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  //sets the type of the shape as HTML
  shape: {
      type: 'HTML',
  }
}];
// initialize Diagram component
function App() {
  return (
    <div>
      <script id="nodeTemplate">
          <div style={{ background: "yellow", height: "100%", width: "100%" }}>
            <input type="button" id="button" style={{ width: "100%" }} value="${id}" />
          </div>
      </script>
      <DiagramComponent
        id="container"
        width={'100%'}
        height={'600px'}
        // Add node
        nodes={node}
        nodeTemplate='#nodeTemplate'
        // render initialized Diagram
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


