import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent,ConnectorConstraints,ConnectorEditing,Diagram } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing)
let connectors = [
    {
        id: "connector2",
        type: 'Orthogonal',
        // Defines multile segemnts for the connectors
        segments: [
            {
                type: 'Orthogonal',
                direction: 'Bottom',
                length: 150,
              },
              {
                type: 'Orthogonal',
                direction: 'Right',
                length: 150,
              },
              {
                type: 'Orthogonal',
                direction: 'Top',
                length: 100,
              },
              {
                type: 'Orthogonal',
                direction: 'Left',
                length: 100,
              },
        ],
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 400,
            y: 200
        },
        constraints: ConnectorConstraints.Default |ConnectorConstraints.DragSegmentThumb,
    }
];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} connectors={connectors}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
