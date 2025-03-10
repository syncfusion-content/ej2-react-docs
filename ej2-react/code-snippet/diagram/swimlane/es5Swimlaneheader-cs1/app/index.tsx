import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
     id: 'swimlane',
     shape: {
                // Set the node type as swimlane
                 type: 'SwimLane',
                 lanes: [
                     {
                         id: 'stackCanvas1',
                         height: 100,
                     },
                 ],
                 phases: [
                     {
                         id: 'phase1', offset: 170,
                         header: { annotation: { content: 'Phase' } }
                     },
                     ],
                 phaseSize: 20,
             },
             offsetX: 300,
             offsetY: 200,
             height: 200,
             width: 350
}];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={node}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


