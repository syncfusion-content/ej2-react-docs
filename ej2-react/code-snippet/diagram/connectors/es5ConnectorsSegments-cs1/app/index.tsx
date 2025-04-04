

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    ConnectorModel,
    StraightSegmentModel
} from "@syncfusion/ej2-react-diagrams";
let connectors: ConnectorModel[] = [{
    id: "connector1",
    type: 'Straight',
    segments: [{
        // Defines the segment type of the connector
        type: 'Straight'
    }],
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
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      connectors={connectors}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



