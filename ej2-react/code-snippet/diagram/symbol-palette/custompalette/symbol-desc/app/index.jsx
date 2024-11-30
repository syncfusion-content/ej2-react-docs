import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, NodeConstraints } from "@syncfusion/ej2-react-diagrams";

//Initialize the basicshapes for the symbol palette
export function getBasicShapes() {
    let basicShapes = [
        {
            id: 'rectangle',
            shape: {
                type: 'Basic',
                shape: 'Rectangle',
            },
            // Defines the tooltip for the shape
            tooltip: { content: 'Rectangle Basic shape', relativeMode: 'Object' },
            constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
        {
            id: 'plus',
            shape: {
                type: 'Basic',
                shape: 'Plus',
            },
            // Defines the tooltip for the shape
            tooltip: { content: 'Plus Basic shape', relativeMode: 'Object' },
            constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
        {
            id: 'triangle',
            shape: {
                type: 'Basic',
                shape: 'RightTriangle',
            },
            // Defines the tooltip for the shape
            tooltip: { content: 'RightTriangle Basic shape', relativeMode: 'Object' },
            constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        },
    ];
    return basicShapes;
}
const palettes = [{
    id: 'basic',
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
    iconCss: 'e-ddb-icons e-basic'
}];
export function getSymbolInfo(symbol) {
    return {
        width: 50,
        height: 50,
        description: {
            //Defines the description text for the symbol
            text: symbol.id,
        },
    };
}
//Initializes the symbol palette
function App() {
    return (<SymbolPaletteComponent id="symbolpalette" palettes={palettes}
        getSymbolInfo={getSymbolInfo} />);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
