import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    NodeModel
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
    // Sets the annotation for the node
    annotations: [{
      // Sets the content for the annotation
      content: 'Annotation',
    }]
}];
// initialize Diagram component
function App() {
  const updateOffset = () => {
    //Method to update the annotation at run time
    diagramInstance.nodes[0].annotations[0].offset = {x:0, y:0.5};
    diagramInstance.dataBind();
  };
  return (
  <div>
    <button id="updateOffset" onClick={updateOffset}>Update Offset</button>
    <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node}/>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



