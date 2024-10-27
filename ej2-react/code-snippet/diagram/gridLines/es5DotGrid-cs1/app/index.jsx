import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, SnapConstraints, Snapping } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(Snapping);

let snapSettings = {
    constraints: SnapConstraints.ShowLines,
    //set gridtype as dot
    gridType: 'Dots',
    horizontalGridlines:{
        // Sets the line color of gridlines
        lineColor: 'blue',
        // Defines the dot intervals of gridlines
        dotIntervals: [3, 20, 1, 20, 1, 20, 1, 20, 1, 20],
      },
    // Defines the verticalGridlines for SnapSettings
    verticalGridlines: {
        // Defines the dot intervals of gridlines
        dotIntervals: [3, 20, 1, 20, 1, 20],
        // Sets the line color of gridlines
        lineColor: 'blue',
      },
  
};

// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
     snapSettings={snapSettings}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
