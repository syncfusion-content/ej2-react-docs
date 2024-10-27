import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent,} from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
//Initializes the node
let node = [{
    id: 'node1',
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 100,

}, {
    id: 'node2',
    width: 100,
    height: 60,
    offsetX: 200,
    offsetY: 170,

}, {
    id: 'node3',
    width: 100,
    height: 60,
    offsetX: 400,
    offsetY: 240,
}];
//Initializes the Diagram Component
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'650px'}
      height={'350px'}
      nodes={node}
      created={() => {
        let selArray = []; selArray.push(diagramInstance.nodes[0], diagramInstance.nodes[1], diagramInstance.nodes[2]);
        //Selects the nodes
        diagramInstance.select(selArray);
        //Distributes space between the nodes
        diagramInstance.distribute('RightToLeft', diagramInstance.selectedItems.nodes);
      }}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);