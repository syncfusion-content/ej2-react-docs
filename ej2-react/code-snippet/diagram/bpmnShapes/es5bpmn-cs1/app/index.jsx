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
        //Sets type as Bpmn and shape as Event
        shape: {
            type: 'Bpmn',
            shape: 'Event',
            // set the event type as End
            event: {
                event: 'End'
            }
        },
    }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Add node
    nodes={node}>
      <Inject services={[BpmnDiagrams]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
