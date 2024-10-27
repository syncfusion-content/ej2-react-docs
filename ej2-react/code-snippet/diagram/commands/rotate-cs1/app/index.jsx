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

const rotateClockWise = function () {
  let node = diagramInstance.nodes[0];
  /**
   * paramter 1 - Rotate item
   * paramter 2 - angle to be rotated
   */
  diagramInstance.rotate(node, 45)
}

const rotateAntiClockWise = function () {
  let node = diagramInstance.nodes[0];
  /**
   * paramter 1 - Rotate item
   * paramter 2 - angle to be rotated
   */
  diagramInstance.rotate(node, -45);
}

//Initializes the Diagram component
function App() {
  return (<div>
    <ButtonComponent content="Rotate Clock Wise" onClick={rotateClockWise} />
    <ButtonComponent content="Rotate anti-clockWise" onClick={rotateAntiClockWise} />
    <DiagramComponent id="diagram1" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node}
    /></div>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
