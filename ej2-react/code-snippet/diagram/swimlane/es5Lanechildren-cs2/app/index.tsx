import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";
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
        },
      ],
      phases: [
        {
          id: 'phase1',
          offset: 150,
          addInfo: { name: 'phase1' },
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
let diagramInstance: DiagramComponent;
function App() {
  const addChildToLane = () => {
      var node = [
        {
          id: 'newNode',
          width: 100,
          height: 50,
        },
      ];
      diagramInstance.addNodeToLane(node as NodeModel, 'swimlane', 'stackCanvas1');
  };

return (
    <div>
      <button id="addChildToLane" onClick={addChildToLane}>addChildToLane</button>
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
        nodes={node}
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



