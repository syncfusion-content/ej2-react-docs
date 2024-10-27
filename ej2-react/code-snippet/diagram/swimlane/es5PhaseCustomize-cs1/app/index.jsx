import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
    id: 'swim1',
    shape: {
      type: 'SwimLane',
      orientation: 'Horizontal',
      //Intialize header to swimlane
      header: {
        annotation: {
          content: 'ONLINE PURCHASE STATUS'
        },
        height: 50,
        style: { fontSize: 11 },
      },
      lanes: [
        {
          id: 'stackCanvas1',
          height: 100,
          // customization of lane header
          header: {
            annotation: { content: 'Online Consumer' },
            style: { fontSize: 11, fill: 'red' },
          },
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
let diagramInstance;
function App() {
    const addLane = () => {
        let swimlane = diagramInstance.getObject('swim1');
        let lane = [
          {
            height: 100,
            style: { fill: 'lightgrey' },
            header: {
              annotation: {
                content: 'New Lane',
                style: { fill: 'brown', color: 'white', fontSize: 15 },
              },
              style: { fill: 'pink' },
            },
          },
        ];
        /**
         * To add lanes
         * parameter 1 - The swimlane to which lanes will be added.
         * parameter 2 - An array of LaneModel objects representing the lanes to be added.
         * paramter 3 - The index at which the lanes should be inserted (optional).
         */
        diagramInstance.addLanes(swimlane, lane, 1);
      };
    
      const removelane = () => {
        let swimlane = diagramInstance.getObject('swim1');
        //To get last lane in lane collection
        let lane = swimlane.shape.lanes[
          swimlane.shape.lanes.length - 1
        ];
        /**
         * To remove lane
         * parameter 1 - The swimlane to remove the lane from.
         * parameter 2 - The lane to be removed
         */
        diagramInstance.removeLane(swimlane, lane);
      };
    return (
        <div>
            <button id="addLane" onClick={addLane}>addLane</button>
            <button id="removelane" onClick={removelane}>removelane</button>
            <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} nodes={node}/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);