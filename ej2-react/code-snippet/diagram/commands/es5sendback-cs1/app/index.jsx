import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
let diagramInstance;
//Initializes the nodes
let node = [
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

const sendToBack = function(){
    diagramInstance.sendToBack();

}
//Initializes the Diagram component
function App() {
    return (<div>
        <ButtonComponent content="Send to Back" onClick={sendToBack}/>
        <DiagramComponent id="diagram1" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} /></div>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
