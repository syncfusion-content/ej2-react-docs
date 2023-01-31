import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
export default function App() {
    const nodes = [
        {
            id: "node1",
            height: 100,
            width: 100,
            offsetX: 200,
            offsetY: 100
        },
        {
            id: "node2",
            height: 100,
            width: 100,
            offsetX: 200,
            offsetY: 250
        }
    ];
    const connectors = [
        {
            id: "connector1",
            sourceID: "node1",
            targetID: "node2"
        }
    ];
    return (<DiagramComponent id="container" width={"100%"} height={"350px"} nodes={nodes} connectors={connectors}/>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
