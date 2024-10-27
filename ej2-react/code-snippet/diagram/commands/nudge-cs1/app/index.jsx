import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
let diagramInstance;
//Initializes the nodes
let node = [
    {
        id: 'node1',
        offsetX: 100,
        offsetY: 100,
        width: 70,
        height: 40,
      },
];

const right = function(){
    diagramInstance.nudge('Right');
}
const left = function(){
    diagramInstance.nudge('Left');
}
const up = function(){
    diagramInstance.nudge('Up');
}
const down = function(){
    diagramInstance.nudge('Down');
}
//Initializes the Diagram component
function App() {
    return (<div>
        <ButtonComponent content="Right" onClick={right}/>
        <ButtonComponent content="Left" onClick={left}/>
        <ButtonComponent content="Up" onClick={up}/>
        <ButtonComponent content="Down" onClick={down}/>
        <DiagramComponent id="diagram1" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node}created={() => {
            //Selects the diagram
            diagramInstance.selectAll();
         }} /></div>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
