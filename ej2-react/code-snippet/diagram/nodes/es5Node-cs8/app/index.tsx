{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,NodeModel} from "@syncfusion/ej2-react-diagrams";

let diagramInstance:DiagramComponent;
//initialize node collection
var nodesCollection:NodeModel= [
    { id: 'node16', offsetX: 35, offsetY: 260 },
    { id: 'node17', offsetX: 140, offsetY: 260 },
    { id: 'node18', offsetX: 240, offsetY: 260 }
];// initialize Diagram component
function App() {
    return (
      <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
        created={() => {
            // Add collection of nodes 
            diagramInstance.addElements(nodesCollection);
        }}
      />
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('diagram'));
  root.render(<App />);
  {% endraw %}