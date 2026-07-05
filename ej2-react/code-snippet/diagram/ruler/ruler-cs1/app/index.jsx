

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";

function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} rulerSettings={{ showRulers: true }}></DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


