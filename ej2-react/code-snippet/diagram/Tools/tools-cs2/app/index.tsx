import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  NodeModel,
  DiagramTools,
  DiagramComponent,
} from '@syncfusion/ej2-react-diagrams';
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created={() => {
        let node: NodeModel = {
            id: "Path",
            style: {
                fill: "#fbe172"
            },
            annotations: [{
                content: "Path"
            }],
            shape: {
                type: 'Path',
                data: 'M13.560 67.524 L 21.941 41.731 L 0.000 25.790 L 27.120 25.790 L 35.501 0.000 L 43.882 25.790 L 71.000 25.790 L 49.061 41.731 L 57.441 67.524 L 35.501 51.583 z'
            }
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
