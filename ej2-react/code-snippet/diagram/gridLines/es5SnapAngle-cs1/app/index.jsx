import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, Snapping } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(Snapping);
let diagramInstance;
let snapSettings = {
    // Sets the Snap Angle
    snapAngle: 20,
};
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
    }];
// initialize Diagram component
function App() {
    const SnapAngle = (args) =>{
       //Update snapAngle dynamically
       diagramInstance.snapSettings.snapAngle = Number(args.target.value);
       diagramInstance.dataBind();   
    }
    return (
    <div>
    <label>SnapAngle :</label>
    <input type="number" max="360" min="5" defaultValue="20" onChange={SnapAngle} />
    <DiagramComponent id="container" width={'100%'} height={'600px'} 
    ref={(diagram) => (diagramInstance = diagram)}
    // Add node
    nodes={node} snapSettings={snapSettings}/>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
