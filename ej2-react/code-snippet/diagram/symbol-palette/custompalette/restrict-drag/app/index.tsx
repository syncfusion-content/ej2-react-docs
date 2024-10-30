import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, DiagramComponent, NodeModel, PaletteModel } from "@syncfusion/ej2-react-diagrams";

//Initialize the basic shapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
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
        }
    ];
    return basicShapes;
}

const palettes: PaletteModel[] = [{
    id: 'basic',
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
}];
//Determines to allow drag symbols
const allowDrag: boolean = false;
function App() {
    return (
        <div>
            <SymbolPaletteComponent id="symbolpalette" palettes={palettes}
                symbolWidth={80} symbolHeight={80} allowDrag={allowDrag} />
            <DiagramComponent id="diagram" width="1000px" height="700px" />
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
