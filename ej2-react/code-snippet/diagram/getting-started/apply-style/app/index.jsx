import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
export default function App() {
    const nodes = [
        {
            id: 'Start', width: 140, height: 70, offsetX: 300, offsetY: 100,
            annotations: [{
              id: 'label1',
              content: 'Start'
            }],
            //node shape
            shape: { type: 'Flow', shape: 'Terminator' },
            //node style
            style:{fill:'red',strokeColor:'green',strokeWidth:5,strokeDashArray:'2 2'},
            borderWidth:10,
            borderColor:'orange'
        }
    ];
    return (<DiagramComponent id="container" width={"1000px"} height={"550px"} nodes={nodes}/>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);