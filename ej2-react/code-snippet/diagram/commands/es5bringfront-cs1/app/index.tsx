import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,NodeModel } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
let diagramInstance:DiagramComponent;
//Initializes the nodes
let node:NodeModel[] = [
    {
        id: 'node1',
        width: 90,
        height: 70,
        offsetX: 120,
        offsetY: 100,
      },
      {
        id: 'node2',
        width: 90,
        height: 70,
        offsetX: 150,
        offsetY: 120,
      },
      {
        id: 'node3',
        width: 90,
        height: 70,
        offsetX: 170,
        offsetY: 150,
      },
];

const bringToFront = function(){
    diagramInstance.bringToFront();

}
//Initializes the Diagram component
function App() {
    return (<div>
        <ButtonComponent content="Bring to front" onClick={bringToFront}/>
        <DiagramComponent id="diagram1" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} /></div>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
