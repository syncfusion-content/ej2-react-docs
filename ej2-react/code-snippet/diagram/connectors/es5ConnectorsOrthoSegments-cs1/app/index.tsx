

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    ConnectorModel
} from "@syncfusion/ej2-react-diagrams";
let connectors: ConnectorModel[] = [
    {
        id: "connector1",
        type: 'Orthogonal',
        // Defines multile segemnts for the connectors
        segments: [{
                type: 'Orthogonal',
                direction: 'Bottom',
                length: 150
            },
            {
                type: 'Orthogonal',
                direction: 'Right',
                length: 150
            }
        ],
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 400,
            y: 200
        }
    }
];
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



