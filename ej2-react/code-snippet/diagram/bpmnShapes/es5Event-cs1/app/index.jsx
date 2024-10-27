import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, BpmnDiagrams } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node =  [
    {
        // Position of the node
        offsetX: 150,
        offsetY: 150,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as event
        shape: {
          type: 'Bpmn',
          shape: 'Event',
          // Sets event as Start and trigger as None
          event: {
            event: 'Start',
            trigger: 'None',
          },
        },
      },
      {
        // Position of the node
        offsetX: 350,
        offsetY: 150,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as event
        shape: {
          type: 'Bpmn',
          shape: 'Event',
          // Sets event as Intermediate and trigger as None
          event: {
            event: 'Intermediate',
            trigger: 'None',
          },
        },
      },
      {
        // Position of the node
        offsetX: 550,
        offsetY: 150,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as event
        shape: {
          type: 'Bpmn',
          shape: 'Event',
          // Sets event as End and trigger as None
          event: {
            event: 'End',
            trigger: 'None',
          },
        },
      },
      {
        // Position of the node
        offsetX: 150,
        offsetY: 350,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as event
        shape: {
          type: 'Bpmn',
          shape: 'Event',
          // Sets event as NonInterruptingStart and trigger as Timer
          event: {
            event: 'NonInterruptingStart',
            trigger: 'Timer',
          },
        },
      },
      {
        // Position of the node
        offsetX: 350,
        offsetY: 350,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as event
        shape: {
          type: 'Bpmn',
          shape: 'Event',
          // Sets event as NonInterruptingIntermediate and trigger as Escalation
          event: {
            event: 'NonInterruptingIntermediate',
            trigger: 'Escalation',
          },
        },
      },
      {
        // Position of the node
        offsetX: 550,
        offsetY: 350,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as event
        shape: {
          type: 'Bpmn',
          shape: 'Event',
          // Sets event as ThrowingIntermediate and trigger as Compensation
          event: {
            event: 'ThrowingIntermediate',
            trigger: 'Compensation',
          },
        },
      },
    ];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Add node
    nodes={node}>
      <Inject services={[BpmnDiagrams]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
