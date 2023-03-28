{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
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
          thickness: 25,
          tickAlignment: 'LeftOrTop',
        },
        verticalRuler: {
          interval: 10,
          segmentWidth: 150,
          thickness: 35,
          tickAlignment: 'RightOrBottom',
        },
      }}
    ></DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


{% endraw %}