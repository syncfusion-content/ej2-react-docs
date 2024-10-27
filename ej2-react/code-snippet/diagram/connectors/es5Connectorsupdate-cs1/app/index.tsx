import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    ConnectorModel
} from "@syncfusion/ej2-react-diagrams";
let connectors: ConnectorModel[] = [{
    id: "connector1",
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}];
let diagramInstance: DiagramComponent;
function App() {
  const update = () =>{
     // Update the connector properties at the run time
     diagramInstance.connectors[0].style.strokeColor = '#6BA5D7';
     diagramInstance.connectors[0].style.fill = '#6BA5D7';
     diagramInstance.connectors[0].style.strokeWidth = 2;
     diagramInstance.connectors[0].targetDecorator.style.fill = '#6BA5D7';
     diagramInstance.connectors[0].targetDecorator.style.strokeColor =
       '#6BA5D7';
     diagramInstance.connectors[0].sourcePoint.x = 150;
     diagramInstance.connectors[0].targetPoint.x = 150;
     diagramInstance.dataBind();
  }
  return (
    <div>
       <button onClick={update}>update</button>
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
        connectors={connectors}
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
