

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    DiagramElement,
    Canvas
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance:DiagramComponent;
let canvas: Canvas;
let child1: DiagramElement;
let child2: DiagramElement;
canvas = new Canvas();
canvas.pivot = {
    x: 0,
    y: 0
};
canvas.offsetX = 75;
canvas.offsetY = 75;
canvas.style.fill = '#6BA5D7';
child1 = new DiagramElement();
child1.width = 100;
child1.height = 100;
child1.margin.left = child1.margin.top = 10;
child2 = new DiagramElement();
child2.width = 100;
child2.height = 100;
child2.margin.left = 190;
child2.margin.top = 190;
canvas.children = [child1, child2];
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      mode={'SVG'}
      width={'1000px'}
      height={'600px'}
      // Defines the basic elements
      basicElements={[canvas]}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



