import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, PortVisibility } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        // Initialize port collection
        ports: [{
                offset: {
                    x: 1,
                    y: 0.5
                },
                visibility: PortVisibility.Visible,
                //Set the style for the port
                style: {
                    fill: 'red',
                    strokeWidth: 2,
                    strokeColor: 'black'
                },
                width: 12,
                height: 12,
                // Sets the shape of the port as Circle
                shape: 'Circle'
            }]
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
