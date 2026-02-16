import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
export default function App() {
    return (<DiagramComponent id="container" width={"1000px"} height={"550px"}/>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
