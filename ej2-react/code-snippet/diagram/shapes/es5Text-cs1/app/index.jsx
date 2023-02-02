import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type of the shape as text
        shape: {
            type: 'Text',
            content: 'Text Element'
        },
        //Customizes the appearances such as text, font, fill, and stroke.
        style: {
            strokeColor: 'none',
            fill: 'none',
            color: 'black',
            textAlign: 'Center'
        }
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Add node
    nodes={node}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
