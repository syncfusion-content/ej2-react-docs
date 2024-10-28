import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramTools, DiagramComponent } from '@syncfusion/ej2-react-diagrams';
let diagramInstance;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created={() => {
        //JSON to create a Connector
        let connectors = {
          id: 'connector1',
          type: 'Freehand',
        };
        diagramInstance.drawingObject = connectors;
        //To draw an object once, activate draw once
        diagramInstance.tool = DiagramTools.DrawOnce;
        diagramInstance.dataBind();
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);