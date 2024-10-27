import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, NodeModel, NodeConstraints } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
    id: 'swimlane',
    shape: {
      type: 'SwimLane',
      orientation: 'Horizontal',
      //Intialize header to swimlane
      header: {
        annotation: { content: 'ONLINE PURCHASE STATUS' },
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
          // Set the children of lane
          children: [
            {
              id: 'node1',
              //Preventing node movement outside the lanes
              constraints:
                NodeConstraints.Default | NodeConstraints.AllowMovingOutsideLane,
              annotations: [
                {
                  content: 'Node dragding disabled outside lane',
                  style: { fontSize: 11 },
                },
              ],
              margin: { left: 200, top: 20 },
              height: 60,
              width: 120,
            },
          ],
        },
      ],
      phases: [
        {
          id: 'phase1',
          offset: 170,
          header: { annotation: { content: 'Phase' } },
        },
      ],
      phaseSize: 20,
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



