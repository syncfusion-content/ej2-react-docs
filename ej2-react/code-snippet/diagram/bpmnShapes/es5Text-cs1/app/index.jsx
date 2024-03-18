import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, BpmnDiagrams } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let nodes = [ 
    {
    id: 'event1', style: { strokeWidth: 2 },
    height:70,width:70,offsetX:400,offsetY:200,
    shape: { type: 'Bpmn', shape: 'Event',
        event: { event: 'Start', trigger: 'None' },
        } 
    },
    //node with target
    {
        id: 'textNode1', width: 70, height: 70,
        offsetX:400,offsetY:400,
        annotations:[{content:'textNode1'}],
            shape: {
                type: 'Bpmn', shape: 'TextAnnotation',
                textAnnotation:{ textAnnotationDirection:'Auto',textAnnotationTarget:'event1'}
            } 
    },
    //Node without target
    {
        id: 'textNode2', width: 70, height: 70,
        offsetX:600,offsetY:400,
        annotations:[{content:'textNode1'}],
            shape: {
                type: 'Bpmn', shape: 'TextAnnotation',
                textAnnotation:{ textAnnotationDirection:'Auto',textAnnotationTarget:''}
            } 
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
