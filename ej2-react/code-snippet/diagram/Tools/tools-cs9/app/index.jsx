import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    DiagramTools
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created={() => {
         //JSON to create a rectangle
         let drawingshape = {
            type: 'Basic',
            shape: 'Rectangle',
          };
          let node = {
            shape: drawingshape,
          };
          diagramInstance.drawingObject = node;
          //To draw an object once, activate draw once
          diagramInstance.tool = DiagramTools.DrawOnce;
          diagramInstance.dataBind();
      }}
      elementDraw={(args) => {
          if(args.state === 'Completed'){
            alert('Element Draw Rectangle');
          }
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);