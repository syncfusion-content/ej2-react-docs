import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, BpmnDiagrams } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [
    {
      // Position of the node
      offsetX: 150,
      offsetY: 150,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as Gateway
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as None
        gateway: {
          type: 'None',
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
        shape: 'Gateway',
        //Sets type of the gateway as Inclusive
        gateway: {
          type: 'Inclusive',
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
        shape: 'Gateway',
        //Sets type of the gateway as Exclusive
        gateway: {
          type: 'Exclusive',
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
        shape: 'Gateway',
        //Sets type of the gateway as Parallel
        gateway: {
          type: 'Parallel',
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
        shape: 'Gateway',
        //Sets type of the gateway as ParallelEventBased
        gateway: {
          type: 'ParallelEventBased',
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
        shape: 'Gateway',
        //Sets type of the gateway as EventBased
        gateway: {
          type: 'EventBased',
        },
      },
    },
    {
      // Position of the node
      offsetX: 150,
      offsetY: 550,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as ExclusiveEventBased
        gateway: {
          type: 'ExclusiveEventBased',
        },
      },
    },
    {
      // Position of the node
      offsetX: 350,
      offsetY: 550,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as Complex
        gateway: {
          type: 'Complex',
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
