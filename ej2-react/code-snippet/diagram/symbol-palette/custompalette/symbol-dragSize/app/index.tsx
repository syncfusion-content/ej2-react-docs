import * as React from "react";
import * as ReactDOM from "react-dom";
import '../index.css';
import { SymbolPaletteComponent, DiagramComponent, NodeModel, PaletteModel, SymbolDragSizeModel } from "@syncfusion/ej2-react-diagrams";

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
        },
    ];
    return basicShapes;
}
const palettes: PaletteModel[] = [{
    id: 'basic',
    expanded: true,
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
}];
// Defines the size of the shape while dragging it from the palette to the diagram canvas
const symbolDragSize: SymbolDragSizeModel = { height: 30, width: 40 };
function App() {
    return (
        <div>
            <SymbolPaletteComponent id="symbolpalette" palettes={palettes} symbolDragSize={symbolDragSize} />
            <DiagramComponent id="diagram" width={'100%'} height={'500px'} />
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
