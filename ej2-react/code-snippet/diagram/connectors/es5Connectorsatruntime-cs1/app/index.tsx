import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    ConnectorModel
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
let connectors: ConnectorModel[] = [{
    id: 'connector1',
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}];
function App() {
  const add = () => {
      diagramInstance.add(connectors[0])
  }
  const remove = () => {
      diagramInstance.remove(connectors[0])
  }

  return (
      <div>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
      <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} created={() => {
          // Adds to the Diagram
          diagramInstance.add(connectors[0]);
          // Remove from the diagram
          diagramInstance.remove(connectors[0]);
      }}/>
      </div>
      );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
