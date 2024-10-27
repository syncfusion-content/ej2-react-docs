import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent, Diagram, ConnectorEditing } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing)
let connectors = [
    {
        id: 'connector3',
        type: 'Bezier',
        segments: [{
                type: 'Bezier',
                // First control point: an absolute position from the page origin
                point1: {
                    x: 100,
                    y: 100
                },
                // Second control point: an absolute position from the page origin
                point2: {
                    x: 200,
                    y: 200
                }
            }],
        sourcePoint: {
            x: 100,
            y: 200
        },
        targetPoint: {
            x: 200,
            y: 100
        },
    }
];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} connectors={connectors}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
