import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
export default function App() {
    const nodes = [
        {
            id: "node1",
            height: 100,
            width: 100,
            offsetX: 100,
            offsetY: 200
        }
    ];
    return (<DiagramComponent id="container" width={"100%"} height={"350px"} nodes={nodes}/>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
