

import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent,Inject,NodeModel,BpmnDiagrams,} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node:NodeModel[] = [
    {
      // Position of the node
      offsetX: 150,
      offsetY: 150,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
          activity: 'Task',
          //Sets the type of the task as Send
          task: {
            type: 'Send',
          },
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
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
          activity: 'Task',
          //Sets the type of the task as Service
          task: {
            type: 'Service',
          },
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
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
          activity: 'Task',
          //Sets the type of the task as BusinessRule
          task: {
            type: 'BusinessRule',
          },
        },
      },
    },
    {
      // Position of the node
      offsetX: 750,
      offsetY: 150,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
          activity: 'Task',
          //Sets the type of the task as Receive
          task: {
            type: 'Receive',
          },
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
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
          activity: 'Task',
          //Sets the type of the task as InstantiatingReceive
          task: {
            type: 'InstantiatingReceive',
          },
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
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
          activity: 'Task',
          //Sets the type of the task as Manual
          task: {
            type: 'Manual',
          },
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
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
          activity: 'Task',
          //Sets the type of the task as Script
          task: {
            type: 'Script',
          },
        },
      },
    },
    {
      // Position of the node
      offsetX: 750,
      offsetY: 350,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
          activity: 'Task',
          //Sets the type of the task as User
          task: {
            type: 'User',
          },
        },
      },
    },
    {
      // Position of the node
      offsetX: 450,
      offsetY: 550,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
          activity: 'Task',
          //Sets the type of the task as None
          task: {
            type: 'None',
          },
        },
      },
    },
  ];
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      // Add node
      nodes={node}
    >
      <Inject services={[BpmnDiagrams]} />
    </DiagramComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



