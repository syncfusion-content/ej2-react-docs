import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, PortVisibility, NodeModel } from "@syncfusion/ej2-react-diagrams";
let node: NodeModel[]= [{
        offsetX: 250,
        offsetY: 250,
        width: 100,
        height: 100,
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
                    strokeColor: 'black',
                    opacity: 0.7,
                    strokeDashArray: '2 2',
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
