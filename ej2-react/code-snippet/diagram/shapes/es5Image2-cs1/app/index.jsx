import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 300,
        height: 100,
        //sets the type of the shape as Image
        shape: {
            type: 'Image',
            source: 'https://ej2.syncfusion.com/demos/src/diagram/employees/image16.png',
            scale: 'Stretch'
        },
        //Customizes the appearances such as text, font, fill, and stroke.
        style: {
            fill: 'none'
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
