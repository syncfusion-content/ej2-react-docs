import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
//initialize connector collection
let collectorCollection = [
    { id: 'connector1', sourcePoint: { x: 80, y: 80 }, targetPoint: { x: 150, y: 150 } },
    {id: 'connector2', type: 'Orthogonal', sourcePoint: { x: 170, y: 170 }, targetPoint: { x: 300, y: 300 }},
    { id: 'connector3', type: 'Bezier', sourcePoint: { x: 320, y: 320 }, targetPoint: { x: 400, y: 400 } }
];
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'1500px'} height={'600px'} created={() => {
        //Add collection of connectors
        diagramInstance.addElements(collectorCollection);
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
