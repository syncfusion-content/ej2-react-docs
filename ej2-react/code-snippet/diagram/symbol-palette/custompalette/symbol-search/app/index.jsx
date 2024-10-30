import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent } from "@syncfusion/ej2-react-diagrams";

const flowShapes = [
    { id: 'terminator', shape: { type: 'Flow', shape: 'Terminator' } },
    { id: 'process', shape: { type: 'Flow', shape: 'Process' } },
    { id: 'decision', shape: { type: 'Flow', shape: 'Decision' } },
    { id: 'document', shape: { type: 'Flow', shape: 'Document' } },
    {
        id: 'preDefinedProcess',
        shape: { type: 'Flow', shape: 'PreDefinedProcess' },
    },
    { id: 'paperTap', shape: { type: 'Flow', shape: 'PaperTap' } },
    { id: 'directData', shape: { type: 'Flow', shape: 'DirectData' } },
    { id: 'sequentialData', shape: { type: 'Flow', shape: 'SequentialData' } },
    { id: 'sort', shape: { type: 'Flow', shape: 'Sort' } },
];
const palettes = [
    {
        id: 'basic',
        symbols: flowShapes,
        title: 'Basic Shapes',
    },
];
//enables the search option in the palette
const enableSearch = true;
function App() {
    return (<SymbolPaletteComponent id="symbolpalette" palettes={palettes} symbolHeight={60} symbolWidth={60}
        enableSearch={enableSearch} />);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
