

import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent,Inject,NodeModel,BpmnDiagrams,} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as activity
    shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as SubProcess
        activity: {
            activity: 'SubProcess',
            //Sets the collapsed as true and type as Event
            subProcess: {
                collapsed: false,
                type: 'Event',
                //Sets event as Start and trigger as Message
                events: [{
                    event: 'Start',
                    trigger: 'Message',
                    offset: { x: 0.5, y: 0 },
                    }]
                }
            },
        },
    }];
    // initialize diagram component
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



