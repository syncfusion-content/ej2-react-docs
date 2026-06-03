

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
//Sets scroll status
let diagramInstance;
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={700} height={700} rulerSettings={{ showRulers: true }} scrollSettings={{
        scrollLimit: 'Infinity',
        }}
        created={() => {
            diagramInstance.scrollSettings.horizontalOffset = 100;
            diagramInstance.scrollSettings.verticalOffset = 100;
            diagramInstance.dataBind();
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

