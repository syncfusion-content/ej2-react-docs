import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={700} height={700}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
//Updates scroll settings
diagramInstance.scrollSettings.horizontalOffset = 200;
diagramInstance.scrollSettings.verticalOffset = 30;
diagramInstance.dataBind();
