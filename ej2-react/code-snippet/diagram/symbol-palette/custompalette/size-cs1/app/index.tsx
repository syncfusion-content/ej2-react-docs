import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, NodeModel, PaletteModel, MarginModel } from "@syncfusion/ej2-react-diagrams";

//Initialize the basic shapes for the symbol palette
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
    expanded: true,
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
    iconCss: 'e-ddb-icons e-basic'
}]
//Sets the space to be left around a symbol
const symbolMargin: MarginModel = {
    left: 15,
    right: 15,
    top: 15,
    bottom: 15
};

//Initializes the symbol palette
function App() {
    return (<SymbolPaletteComponent id="symbolpalette" width="100%" height="700px" symbolWidth={80} symbolHeight={80}
        palettes={palettes} expandMode={"Multiple"} symbolMargin={symbolMargin} />);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
