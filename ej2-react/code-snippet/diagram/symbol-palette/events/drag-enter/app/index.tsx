import * as React from "react";
import * as ReactDOM from "react-dom";
import {useRef} from "react";
import { SymbolPaletteComponent, DiagramComponent, NodeModel, PaletteModel, IDragEnterEventArgs } from "@syncfusion/ej2-react-diagrams";

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
    const diagramRef: DiagramComponent = useRef(null);
    const dragEnter = (args: IDragEnterEventArgs) => {
        //DragEntered symbol
        console.log(args.element.id);
        //customize
        args.element.style.fill = 'yellow';
    }
    return (
        <div>
            <SymbolPaletteComponent id="symbolpalette" palettes={palettes} symbolWidth={60} symbolHeight={60} />
            <DiagramComponent id="diagram" ref={diagramRef} width={'1000px'} height={'500px'} dragEnter={dragEnter} />
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
