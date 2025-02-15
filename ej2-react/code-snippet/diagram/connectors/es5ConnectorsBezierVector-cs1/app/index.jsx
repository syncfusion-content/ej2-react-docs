import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent, Diagram, ConnectorEditing } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing)
let connectors = [{
        id: 'connector2',
        // Defines the type of the segment
        type: 'Bezier',
        segments: [{
                type: 'Bezier',
                // Length and angle between the source point and the first control point
                vector1: {
                    distance: 100,
                    angle: 90
                },
                // Length and angle between the target point and the second control point
                vector2: {
                    distance: 45,
                    angle: 270
                }
            }],
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        },
    }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} connectors={connectors}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
