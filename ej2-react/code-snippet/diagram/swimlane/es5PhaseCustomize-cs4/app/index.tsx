import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
  shape: {
      type: 'SwimLane',
      orientation: 'Horizontal',
      //Intialize header to swimlane
      header: {
        annotation: {
          content: 'ONLINE PURCHASE STATUS',
        },
        height: 50,
        style: { fontSize: 11 },
      },
      lanes: [
        {
          id: 'stackCanvas1',
          height: 100,
          header: {
            annotation: { content: 'CUSTOMER' },
            width: 50,
            style: { fontSize: 11 },
          },
        },
      ],
      phases: [
        {
          id: 'phase1',
          offset: 150,
          addInfo: { name: 'phase1' },
          header: {
            annotation: {
              content: 'First phase',
              style: { fill: 'yellow', color: 'red' },
            },
          },
        },
        {
          id: 'phase2',
          offset: 200,
          header: { annotation: { content: 'Second phase' } },
          style: { fill: 'violet' },
        },
      ],
      phaseSize: 40,
    },
    offsetX: 300,
    offsetY: 200,
    height: 200,
    width: 350,
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


