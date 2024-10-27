import * as React from "react";
import { createRoot } from 'react-dom/client';
import { DiagramComponent, NodeConstraints, Inject, BpmnDiagrams } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
let diagramInstance;
// A node is created and stored in nodes array.
let nodes = [
  {
    id: 'start',
    height: 50,
    width: 50,
    margin: { left: 50, top: 50 },
    shape: { type: 'Bpmn', shape: 'Event' },
  },
  {
    id: 'event2',
    height: 50,
    width: 50,
    margin: { left: 150, top: 50 },
    shape: { type: 'Bpmn', shape: 'Event', event: { type: '' } },
  },
  {
    id: 'subProcess',
    width: 520,
    height: 250,
    offsetX: 355,
    offsetY: 230,
    constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
    shape: {
      shape: 'Activity',
      type: 'Bpmn',
      activity: {
        activity: 'SubProcess',
        subProcess: {
          collapsed: false,
          processes: ['start'],
        },
      },
    },
  },
]

const addProcess = function () {
  let event = diagramInstance.nameTable['event2'];
  /**
   * parameter 1 - A process to be added
   * parameter 2 - A string representing the parent ID where the process will be added.
   */
  diagramInstance.addProcess(event, 'subProcess');
}

const removeProcess = function () {
  /**
   * parameter 1 -  The ID of the process to be removed.
   */
  diagramInstance.removeProcess('event2');
}

// initialize diagram component
function App() {
  return (<div>
    <ButtonComponent content="Add Process" onClick={addProcess} />
    <ButtonComponent content="Remove Process" onClick={removeProcess} />
    <DiagramComponent id="container" width={'100%'} height={'600px'} ref={(diagram) => (diagramInstance = diagram)}
      // Add node
      nodes={nodes}>

      <Inject services={[BpmnDiagrams]} />
    </DiagramComponent></div>);
}

const root = createRoot(document.getElementById('diagram'));
root.render(<App />);