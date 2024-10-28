import * as React from "react";
import * as ReactDOM from "react-dom";
import {Diagram,DiagramComponent} from "@syncfusion/ej2-react-diagrams";

function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      rulerSettings={{
        showRulers: true,
        horizontalRuler: {
          interval: 8,
          segmentWidth: 100,
          thickness: 35,
          //Align horizontal ruler tick to the bottom side.
          tickAlignment: 'RightOrBottom',
        },
        verticalRuler: {
          interval: 10,
          segmentWidth: 200,
          thickness: 35,
          //Align vertical ruler tick to the left side.
          tickAlignment: 'LeftOrTop',
        },
      }}
    ></DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
