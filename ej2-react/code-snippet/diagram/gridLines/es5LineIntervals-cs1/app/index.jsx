import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, SnapConstraints, Snapping } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(Snapping);
let snapSettings = {
    constraints: SnapConstraints.ShowLines,
    horizontalGridlines: {
        // Sets the lineIntervals of Gridlines
        lineIntervals: [1.25, 10, 0.25, 10, 0.25, 10, 0.25, 10, 0.25, 10],
        lineColor: 'black',
      },
    verticalGridlines:  {
        // Sets the lineIntervals of Gridlines
        lineIntervals: [1.25, 10, 0.25, 10, 0.25, 10, 0.25, 10, 0.25, 10],
        lineColor: 'black',
      }
};

// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
     snapSettings={snapSettings}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
