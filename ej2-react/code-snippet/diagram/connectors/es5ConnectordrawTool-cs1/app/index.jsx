import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { DiagramComponent, DiagramTools } from "@syncfusion/ej2-react-diagrams";

const drawingObject = { type: 'Orthogonal' };

function App() {
    return (
        <DiagramComponent
            id="container"
            width={'100%'}
            height={'600px'}
            tool={DiagramTools.ContinuousDraw}
            drawingObject={drawingObject}
        />
    );
}

const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
