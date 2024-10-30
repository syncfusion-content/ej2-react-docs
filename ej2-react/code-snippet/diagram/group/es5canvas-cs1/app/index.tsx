import * as React from "react";
import * as ReactDOM from "react-dom";
import {useRef} from "react";
import {
    Diagram,
    DiagramComponent,
    DiagramElement,
    Canvas
} from "@syncfusion/ej2-react-diagrams";
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
child1.id = 'child1';
child1.width = 100;
child1.height = 100;
child1.margin.left = child1.margin.top = 10;
child2 = new DiagramElement();
child2.id = 'child2';
child2.width = 100;
child2.height = 100;
child2.margin.left = 190;
child2.margin.right = 5;
child2.margin.top = 190;
child2.margin.bottom = 5;
canvas.children = [child1, child2];
function App() {
  const diagramInstance: DiagramComponent = useRef(null);
  return (
    <DiagramComponent
      id="diagram"
      ref={diagramInstance}
      mode={'SVG'}
      width={'1000px'}
      height={'600px'}
      // Defines the basic elements
      basicElements={[canvas]}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


