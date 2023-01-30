import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, AnnotationConstraints } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let connector = [{
        id: 'connector2',
        type: 'Orthogonal',
        sourcePoint: { x: 300, y: 300 },
        targetPoint: { x: 400, y: 400 },
        annotations: [
            {
                content: 'connector1', offset: 0.5,
                //Enables drag constraints for a connector.
                constraints: AnnotationConstraints.Interaction | AnnotationConstraints.Drag,
                //Set drag limit for a connector annotation.
                dragLimit: { left: 20, right: 20, top: 20, bottom: 20 }
            }
        ],
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} connectors={connector}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
