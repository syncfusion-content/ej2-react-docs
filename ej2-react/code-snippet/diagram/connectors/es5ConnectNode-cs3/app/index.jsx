import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let connectors = [{
    id: 'connector1',
    //Flip
    flip: 'Horizontal',
    annotations: [{ content: 'Horizontal Flip' }],
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 200, y: 200 },
  },
  {
    id: 'connector2',
    //Flip
    flip: 'Vertical',
    annotations: [{ content: 'Vertical Flip' }],
    sourcePoint: { x: 300, y: 100 },
    targetPoint: { x: 400, y: 200 },
  },
  {
    id: 'connector3',
    //Flip
    flip: 'Both',
    annotations: [{ content: 'Both Flip' }],
    sourcePoint: { x: 500, y: 100 },
    targetPoint: { x: 600, y: 200 },
  }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} connectors={connectors}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
