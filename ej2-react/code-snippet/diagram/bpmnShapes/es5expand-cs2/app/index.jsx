import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,NodeConstraints, Inject, BpmnDiagrams } from "@syncfusion/ej2-react-diagrams";
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
      },] 
// initialize diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Add node
    nodes={nodes}>
      <Inject services={[BpmnDiagrams]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);