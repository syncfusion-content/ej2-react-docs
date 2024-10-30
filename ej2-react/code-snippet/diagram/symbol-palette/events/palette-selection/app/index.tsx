import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { SymbolPaletteComponent, DiagramComponent, NodeModel, PaletteModel, IPaletteSelectionChangeArgs } from "@syncfusion/ej2-react-diagrams";

//Initialize the basic shapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [{
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
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
}];
function App() {
    const diagramRef = useRef(null);
    // Triggered upon symbol selection change
    const paletteSelectionChange = (args: IPaletteSelectionChangeArgs) => {
        //The selected symbol
        console.log(args.newValue);
    }
    return (
        <div>
            <SymbolPaletteComponent id="symbolpalette" palettes={palettes} symbolWidth={70} symbolHeight={60}
                paletteSelectionChange={paletteSelectionChange} />
            <DiagramComponent id="diagram" ref={diagramRef} width={'1000px'} height={'500px'} />
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
