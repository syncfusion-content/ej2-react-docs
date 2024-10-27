import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, SnapConstraints, Snapping } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(Snapping);
// Display both Horizontal and Vertical gridlines
let snapSettings = {
    constraints: SnapConstraints.ShowLines,
};
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    snapSettings={snapSettings}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
