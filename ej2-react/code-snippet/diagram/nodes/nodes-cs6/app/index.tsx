import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, DiagramTools } from '@syncfusion/ej2-react-diagrams';
let diagramInstance: DiagramComponent;
// initialize Diagram component
function App() {
  return (
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={'100%'}
        height={'700px'}
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
            diagramInstance.tool = DiagramTools.ContinuousDraw;
            diagramInstance.dataBind();
          }}
      />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);