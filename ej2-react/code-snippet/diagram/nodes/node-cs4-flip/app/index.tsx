import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
    BasicShapeModel,
    FlipDirection
} from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node: NodeModel[] = [{
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Flip the node in Horizontal Direction
   flip:FlipDirection.Horizontal,
   shape: {
        type: 'Basic',
        shape: 'RightTriangle',
    },
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    }
    // Text(label) added to the node
}];
let diagramInstance: DiagramComponent;
function App() {
   const flipHorizontal = () => {
          diagramInstance.nodes[0].flip ^= FlipDirection.Horizontal;
          diagramInstance.dataBind();
      };
      const flipVertical = () => {
          diagramInstance.nodes[0].flip ^= FlipDirection.Vertical;
          diagramInstance.dataBind();
      };
      const flipBoth = () => {
          diagramInstance.nodes[0].flip ^= FlipDirection.Both;
          diagramInstance.dataBind();
      };
      const flipNone = () => {
          diagramInstance.nodes[0].flip = FlipDirection.None;
          diagramInstance.dataBind();
      };
  return (
    <div>
    <button onClick={flipHorizontal}>flipHorizontal</button>
    <button onClick={flipVertical}>flipVertical</button>
    <button onClick={flipBoth}>flipBoth</button>
    <button onClick={flipNone}>flipNone</button>
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={node}
      // render initialized Diagram
    />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);