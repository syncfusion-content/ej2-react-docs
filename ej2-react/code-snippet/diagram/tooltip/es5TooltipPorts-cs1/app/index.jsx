import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DiagramConstraints, NodeConstraints,PortConstraints,PortVisibility } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
        id: "node1",
        width: 100,
        height: 100,
        annotations: [{
                id: 'label',
                content: 'Rectangle',
                offset: {
                    x: 0.5,
                    y: 0.5
                },
                style: {
                    color: 'white'
                },
            }],
        offsetX: 200,
        offsetY: 200,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7'
        },
        ports:{
            offset: {
                x: 0.5,
                y: 0
            },
            visibility: PortVisibility.Visible,
            //Set the style for the port
            style: {
                fill: '#FFFFFF',
                strokeWidth: 1,
                strokeColor: 'black'
            },
            //Defines mouse over tooltip for a node
            tooltip: {
                //Sets the content of the Tooltip
                content: 'Port Tooltip',
                //Sets the tooltip position relative to the node
                relativeMode: 'Object'
            },
            constraints: PortConstraints.Default | PortConstraints.Tooltip
        }
    }];
//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="container" width={'650px'} height={'350px'} 
    //Defines nodes
    nodes={node}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
