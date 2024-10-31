import * as React from "react";
import * as ReactDOM from "react-dom";
import '../index.css';
import { SymbolPaletteComponent } from "@syncfusion/ej2-react-diagrams";

//Initializes connector symbols for the symbol palette
export function getConnectors() {
    let connectors = [
        {
            id: 'Straight',
            type: 'Straight',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: 'Arrow',
                style: { strokeColor: '#757575', fill: '#757575' },
            },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        },
        {
            id: 'Orthogonal',
            type: 'Orthogonal',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: 'Arrow',
                style: { strokeColor: '#757575', fill: '#757575' },
            },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        },
        {
            id: 'Bezier',
            type: 'Bezier',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: 'Arrow',
                style: { strokeColor: '#757575', fill: '#757575' },
            },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        },
    ];
    return connectors;
}

const palettes = [
    {
        id: "connectors",
        expanded: true,
        symbols: getConnectors(),
        title: "Connectors",
        iconCss: "e-ddb-icons e-connector",
    },
];
//Initializes the symbol palette
function App() {
    return (<SymbolPaletteComponent id="symbolpalette"
        //Defines how many palettes can be at expanded mode at a time
        expandMode={"Multiple"}
        //Defines the palette collection
        palettes={palettes}
        //Specifies the default size to render symbols
        symbolHeight={80} symbolWidth={80} />);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
