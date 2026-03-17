{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, NodeModel, SwimlaneModel} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node: NodeModel[] = [
  {
    id: 'swim1',
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
            offset: 120,
            header: { annotation: { content: 'Phase' } },
        },
        {
            id: 'phase2',
            offset: 200,
            header: { annotation: { content: 'Phase' } },
        },
        ],
        phaseSize: 20,
    },
    offsetX: 300,
    offsetY: 200,
    height: 200,
    width: 350,
  },
];
let diagramInstance: DiagramComponent;
// initialize Diagram component
function App() {
  const addPhase = () => {
    let swimlane = diagramInstance.getObject('swim1');
    var phase = [
        {
        id: 'phase3',
        offset: 250,
        header: { annotation: { content: 'New Phase' } },
        },
    ];
    /**
     * To add phases
     * parameter 1 - object representing the swimlane to which phases will be added.
     * parameter 2 - objects representing the phases to be added.
     */
    diagramInstance.addPhases(swimlane, phase); 
  };

  const removePhase = () => {
    let swimlane = diagramInstance.getObject('swim1');
    let phase = (swimlane.shape as SwimlaneModel).phases[
      (swimlane.shape as SwimlaneModel).phases.length - 1
    ];
    /**
     * To remove phase
     * parameter 1 - representing the swimlane to remove the phase from.
     * paramter 2 - representing the phase to be removed.
     */
    diagramInstance.removePhase(swimlane, phase);
  };
  return (
    <div>
      <button id="addPhase" onClick={addPhase}> addPhase</button>
      <button id="removePhase" onClick={removePhase}>removePhase</button>
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

{% endraw %}