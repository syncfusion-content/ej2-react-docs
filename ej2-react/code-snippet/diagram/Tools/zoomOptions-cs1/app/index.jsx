{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let node = [{
    offsetX: 300,
    offsetY: 300
}]
function App() {
    const zoomIn = () => {
        let zoomOptions = {
            type: 'ZoomIn',
            zoomFactor: 0.2,
            focusPoint: { x: 0.5, y: 0.5 },
        };
        diagramInstance.zoomTo(zoomOptions);
        diagramInstance.dataBind();
    };
    const zoomOut = () => {
        let zoomOptions = {
            type: 'ZoomOut',
            zoomFactor: 0.2,
            focusPoint: { x: 0.5, y: 0.5 },
        };
        diagramInstance.zoomTo(zoomOptions);
        diagramInstance.dataBind();
    };  
    return (
    <div>
        <button id="zoomIn" onClick={zoomIn}>Zoom In</button>
        <button id="zoomOut" onClick={zoomOut}>Zoom Out</button>
        <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={700} height={700} nodes={node} rulerSettings={{ showRulers: true }} scrollSettings={{ scrollLimit: 'Infinity' }}/>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}