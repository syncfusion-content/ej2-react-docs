import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, BpmnDiagrams } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as activity
        shape: {
            type: 'Bpmn', shape: 'Activity', activity: {
                //Sets activity as SubProcess
                activity: 'SubProcess',
                subProcess: {
                    //Sets collapsed as true and type as Transition
                    collapsed: true,
                    type: 'Transaction',
                    events: [{
                            event: 'Intermediate',
                            trigger: 'Cancel',
                            offset: {
                                x: 0.25,
                                y: 1
                            }
                        },
                        {
                            event: 'Intermediate',
                            trigger: 'Error',
                            offset: {
                                x: 0.25,
                                y: 1
                            }
                        },
                    ]
                    //processes: ['start', 'end', 'nod1', 'nod']
                }
            },
        },
    }];
// initialize diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Add node
    nodes={node}>
      <Inject services={[BpmnDiagrams]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
