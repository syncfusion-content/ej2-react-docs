import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ConnectorModel,
    DiagramTools,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={700}
      height={700}
      created = {
            () => {
                let connector: ConnectorModel = {
                    id: 'connector1',
                    type: 'Polyline'
                };
                diagramInstance.drawingObject = connector;
                //To draw an object once, activate draw once
                diagramInstance.tool = DiagramTools.DrawOnce;
                diagramInstance.dataBind();
            }
        }
      //customize the appearance of the shape
      getNodeDefaults={(obj, diagramInstance) => {
        obj.borderWidth = 1;
        obj.style = {
          fill: '#6BA5D7',
          strokeWidth: 2,
          strokeColor: '#6BA5D7',
        };
        return obj;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);