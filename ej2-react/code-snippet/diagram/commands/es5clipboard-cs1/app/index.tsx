import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,NodeModel } from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
let diagramInstance:DiagramComponent;

//Initializes the nodes
let node:NodeModel[] = [{
    id: 'node1',
    width: 100,
    height: 80,
    offsetX: 140,
    offsetY: 100,
    annotations: [{ content: 'Node1' }],
  },
  {
    id: 'node2',
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 200,
    annotations: [{ content: 'Node2' }],
  },
  {
    id: 'node3',
    width: 200,
    height: 30,
    offsetX: 140,
    offsetY: 300,
    annotations: [{ content: 'Node3' }],
  },];
const cut = function(){
    diagramInstance.cut();
}

const copy = function(){
    diagramInstance.copy();
}

const paste = function(){
    diagramInstance.paste();
}

const pasteDefinedObject = function(){
    let nodes = [
        {
          id: 'n1',
          offsetX: 400,
          offsetY: 100,
          width: 100,
        },
        {
          id: 'n2',
          offsetX: 400,
          offsetY: 200,
          width: 100,
        },
      ];
      diagramInstance.paste(nodes);
}

//Initializes the Diagram component
function App() {
    return (<div>
         <ButtonComponent content="Cut" onClick={cut}/>
         <ButtonComponent content="Copy" onClick={copy}/>
         <ButtonComponent content="Paste" onClick={paste}/>
         <ButtonComponent content="Paste Defined Object" onClick={pasteDefinedObject}/>
        <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node}/></div>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);