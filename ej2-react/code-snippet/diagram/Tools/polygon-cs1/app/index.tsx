{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    BasicShapeModel,
    NodeModel,
    DiagramTools,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
//Sets scroll status
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      scrollSettings={{
        horizontalOffset: 100,
        verticalOffset: 50,
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



{% endraw %}