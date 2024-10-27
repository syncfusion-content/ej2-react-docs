import * as React from "react";
import { createRoot } from 'react-dom/client';
import { DiagramComponent,NodeModel,NodeConstraints, Inject, BpmnDiagrams } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let nodes:NodeModel[]= [ 
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

const root = createRoot(document.getElementById('diagram'));
root.render(<App />);