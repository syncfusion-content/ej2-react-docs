import * as React from "react";
import * as ReactDOM from "react-dom";
import '../index.css';
import { SymbolPaletteComponent } from "@syncfusion/ej2-react-diagrams";

//Initialize the basic shapes for the symbol palette
export function getBasicShapes() {
    let basicShapes = [
        {
            id: 'Rectangle-symbol',
            shape: {
                type: 'Basic',
                shape: 'Rectangle',
            },
        },
        {
            id: 'Ellipse-symbol',
            shape: {
                type: 'Basic',
                shape: 'Ellipse',
            },
        },
        {
            id: 'Hexagon-symbol',
            shape: {
                type: 'Basic',
                shape: 'Hexagon',
            },
        },
    ];
    return basicShapes;
}
//Initialize the flow shapes for the symbol palette
export function getFlowShapes() {
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
        },
    ];
    return flowShapes;
}
const palettes = [{
    id: 'basic',
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
}, {
    id: 'flow',
    symbols: getFlowShapes(),
    title: 'Flow Shapes',
},];
export function getSymbolInfo(symbol) {
    return {
        width: 100,
        height: 50,
        description: {
            // Defines the description text for the symbol
            text: symbol.id,
            // Defines the margin between the symbol and text
            margin: { top: 20, bottom: 10 },
            // Defines the background color of the text
            fill: 'green',
            // Defines the font family of the text
            fontFamily: 'Calibri',
            // Defines the font size of the text
            fontSize: 15,
            // Defines if the text is bold
            bold: true,
            // Defines if the text is italic
            italic: true,
            // Defines the text decoration
            textDecoration: 'Underline',
            // Defines the color of the text
            color: 'white',
        },
    };
}
//Initializes the symbol palette
function App() {
    return (<SymbolPaletteComponent id="symbolpalette" palettes={palettes}
        getSymbolInfo={getSymbolInfo} enableSearch={true} />);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
