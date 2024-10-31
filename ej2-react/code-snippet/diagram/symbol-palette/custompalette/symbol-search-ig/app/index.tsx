import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, NodeModel, PaletteModel } from "@syncfusion/ej2-react-diagrams";

const basicShapes: NodeModel[] = [
    {
        id: 'rectangle',
        shape: {
            type: 'Basic',
            shape: 'Rectangle',
        },
    },
    {
        id: 'plus',
        shape: {
            type: 'Basic',
            shape: 'Plus',
        },
    },
    {
        id: 'triangle',
        shape: {
            type: 'Basic',
            shape: 'RightTriangle',
        },
    },
];
const palettes: PaletteModel = [
    {
        id: 'basic',
        symbols: basicShapes,
        title: 'Basic Shapes',
    },
];
// collection of shapes to be ignored on search
const ignoreSymbolsOnSearch: string[] = ['plus'];
function App() {
    return (<SymbolPaletteComponent id="symbolpalette" palettes={palettes} symbolHeight={60} symbolWidth={60}
        enableSearch={true} ignoreSymbolsOnSearch={ignoreSymbolsOnSearch} />);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
