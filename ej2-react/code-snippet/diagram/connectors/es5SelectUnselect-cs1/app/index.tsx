

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    ConnectorModel
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance:DiagramComponent;
let connectors: ConnectorModel[] = [{
    // Name of the connector
    id: "connector1",
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
    // Flip the connector in horizontal direction
      flip:"Horizontal"
}];
function App() {
  const select = () => {
    diagramInstance.select([diagramInstance.connectors[0]]);
}
const unSelect = () => {
    diagramInstance.clearSelection();
}
return (
  <div>
      <button onClick={select}>select</button>
      <button onClick={unSelect}>unSelect</button>
      <DiagramComponent id="container" width={'100%'} height={'600px'} 
      ref={(diagram) => (diagramInstance = diagram)}
      connectors={connectors}/>
   </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


