import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, SnapConstraints, Snapping } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(Snapping);
let snapSettings = {
    // Define the Constraints for gridlines and snapping
    constraints: SnapConstraints.ShowLines,
    horizontalGridlines: {
      // Sets the line color of gridlines
      lineColor: "blue",
      // Defines the lineDashArray of gridlines
      lineDashArray: '2 2'
    },
    verticalGridlines: {
      // Sets the line color of gridlines
      lineColor: "blue",
      // Defines the lineDashArray of gridlines
      lineDashArray: '2 2'
    }
};
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Define the snap setting for the diagram
    snapSettings={snapSettings}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
