import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, DiagramComponent } from "@syncfusion/ej2-react-diagrams";

//Initialize the basic shapes for the symbol palette
export function getBasicShapes() {
    let basicShapes = [
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
    return basicShapes;
}
//Initialize the flow shapes for the symbol palette
export function getFlowShapes() {
    let flowShapes = [
        {
            id: 'process',
            shape: {
                type: 'Flow',
                shape: 'Process',
            },
        },
        {
            id: 'terminator',
            shape: {
                type: 'Flow',
                shape: 'Terminator',
            },
        },
        {
            id: 'decision',
            shape: {
                type: 'Flow',
                shape: 'Decision',
            },
        },
        {
            id: 'document',
            shape: {
                type: 'Flow',
                shape: 'Document',
            },
        },
        {
            id: 'data',
            shape: {
                type: 'Flow',
                shape: 'Data',
            },
        },
    ];
    return flowShapes;
}
const palettes = [
    {
        id: 'basic',
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
    },
    {
        id: 'flow',
        symbols: getFlowShapes(),
        title: 'Flow Shapes',
    }
];
//enables search option in the palette
const enableSearch = true;
export function filterSymbols(symbols) {
    let symbolGroup = [];
    for (let i = 0; i < symbols.length; i++) {
        let symbol = symbols[i];
        //Filters symbol based on type
        if (symbol.shape.type === 'Flow') {
            symbolGroup.push(symbol);
        }
    }
    return symbolGroup;
}
function App() {
    return (
        <div>
            <SymbolPaletteComponent id="symbolpalette" palettes={palettes} symbolHeight={60} symbolWidth={60}
                enableSearch={enableSearch} filterSymbols={filterSymbols} />
            <DiagramComponent id="diagram" width="100%" height="700px" />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
