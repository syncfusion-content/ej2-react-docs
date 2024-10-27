import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let connector = [{
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 500, y: 100 },
    //Path annotation offset
    annotations: [{ content: 'annotation', alignment: 'After', displacement: { x: 50, y: 50 }, }],
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} connectors={connector}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
