import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let connectors = [{
        id: "connector1",
        // Defines the segment type of the connector
        segments: [{
                type: 'Straight',
                // Defines the point of the segment
                point: {
                    x: 100,
                    y: 150
                }
            }],
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        type: 'Straight',
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
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} connectors={connectors}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
