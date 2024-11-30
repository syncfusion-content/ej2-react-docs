import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, NodeModel, PaletteModel, SymbolInfo } from "@syncfusion/ej2-react-diagrams";

//Initialize the basicshapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
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
const palettes: PaletteModel[] = [{
    id: 'basic',
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
    iconCss: 'e-ddb-icons e-basic'
}];
export function getSymbolInfo(symbol: NodeModel): SymbolInfo {
    return {
        width: 50,
        height: 50,
        description: {
            //Defines the description text for the symbol
            text: symbol.id,
            //Defines the text wrapping based on symbol id
            wrap:
                symbol.id === 'Rectangle-symbol' || symbol.id === 'Ellipse-symbol'
                    ? 'NoWrap'
                    : 'WrapWithOverflow',
            //Defines the text overflow based on symbol id
            overflow:
                symbol.id === 'Rectangle-symbol'
                    ? 'Ellipsis'
                    : symbol.id === 'Ellipse-symbol'
                        ? 'Clip'
                        : 'Clip',
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
