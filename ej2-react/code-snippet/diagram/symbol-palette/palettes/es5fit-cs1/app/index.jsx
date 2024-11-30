import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent } from "@syncfusion/ej2-react-diagrams";

//Initialize the basicshapes for the symbol palette
export function getBasicShapes() {
    let basicShapes = [
        {
            id: 'Rectangle', width: 200,
            shape: {
                type: 'Basic',
                shape: 'Rectangle'
            }
        },
        {
            id: 'Ellipse', width: 200,
            shape: {
                type: 'Basic',
                shape: 'Ellipse'
            }
        },
        {
            id: 'Hexagon', width: 200,
            shape: {
                type: 'Basic',
                shape: 'Hexagon'
            }
        }
    ];
    return basicShapes;
}
const palettes = [
    {
        id: 'basic',
        expanded: true,
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic',
    },
];
export function getSymbolInfo(symbol) {
    // Enables to fit the content into the specified palette item size
    return {
        fit: true,
    };
    // When it is set as false, the element is rendered with actual node size
}
//Initializes the symbol palette
function App() {
    return (<SymbolPaletteComponent id="symbolpalette" width="100%" height="700px"
        palettes={palettes} symbolHeight={80} symbolWidth={80}
        //Sets the size, appearance and description of a symbol
        getSymbolInfo={getSymbolInfo} />);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
