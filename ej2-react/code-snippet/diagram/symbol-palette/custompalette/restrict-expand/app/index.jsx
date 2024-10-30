import * as React from "react";
import * as ReactDOM from "react-dom";
import '../index.css';
import { SymbolPaletteComponent } from "@syncfusion/ej2-react-diagrams";

//Expands only one palette at a time
const expandMode = "Multiple";
//Initialize the basicshapes for the symbol palette
const getBasicShapes = () => {
    let basicShapes = [
        {
            id: 'Rectangle',
            shape: { type: 'Basic', shape: 'Rectangle' },
            style: { strokeWidth: 2 },
        },
        {
            id: 'Ellipse',
            shape: { type: 'Basic', shape: 'RightTriangle' },
            style: { strokeWidth: 2 },
        },
        {
            id: 'Hexagon',
            shape: { type: 'Basic', shape: 'Hexagon' },
            style: { strokeWidth: 2 },
        }
    ];
    return basicShapes;
}
//Initialize the flowshapes for the symbol palette
const getFlowShapes = () => {
    let flowShapes = [
        {
            id: 'Process',
            shape: { type: 'Flow', shape: 'Process' },
            style: { strokeWidth: 2 },
        },
        {
            id: 'Document',
            shape: { type: 'Flow', shape: 'Document' },
            style: { strokeWidth: 2 },
        }
    ];
    return flowShapes;
}

const palettes = [{
    id: 'flow',
    expanded: true,
    symbols: getFlowShapes(),
    title: 'Flow Shapes',
    iconCss: 'e-ddb-icons e-flow'
},
{
    id: 'basic',
    expanded: true,
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
    iconCss: 'e-ddb-icons e-basic'
}
];
const paletteExpanding = (args) => {
    if (args.palette.id === 'basic') {
        // Basic shapes panel does not collapse
        args.cancel = true;
    } else {
        // Flow shapes panel collapse and expand
        args.cancel = false;
    }
}
function App() {
    return (<SymbolPaletteComponent id="symbolpalette" width="100%" height="700px" expandMode={expandMode}
        palettes={palettes} symbolHeight={80} symbolWidth={80} paletteExpanding={paletteExpanding} />);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
