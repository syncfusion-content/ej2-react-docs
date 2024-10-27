import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, Snapping } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(Snapping);
let diagramInstance;
let snapSettings = {
    snapLineColor: "red",
};
// A node is created and stored in nodes array.
let node = [{
        // Position of the node
        offsetX: 100,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
    },
    {
        // Position of the node
        offsetX: 300,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
    }
];
// initialize Diagram component
function App() {
    const SnapColor = (args) =>{
       //Update snapcolor dynamically
       diagramInstance.snapSettings.snapLineColor  = args.target.value
       diagramInstance.dataBind();   
    }
    return (
    <div>
    <label>SnapColor :</label>
    <input type="color" onChange={SnapColor} />
    <DiagramComponent id="container" width={'100%'} height={'600px'} 
    ref={(diagram) => (diagramInstance = diagram)}
    // Add node
    nodes={node} snapSettings={snapSettings}/>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
