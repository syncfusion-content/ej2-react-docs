import * as React from "react";
import * as ReactDOM from "react-dom";
import '../index.css';
import { SymbolPaletteComponent, DiagramComponent, NodeConstraints, NodeModel, PaletteModel, IDragEnterEventArgs } from "@syncfusion/ej2-react-diagrams";

//Initialize the basic shapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
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
const palettes: PaletteModel[] = [{
    id: 'basic',
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
    iconCss: 'e-ddb-icons e-basic'
}];
function App() {
    const dragEnter = (args: IDragEnterEventArgs) => {
        const node = args.element;
        //Setting new tooltip content for the dragEntered node 
        node.tooltip.content = 'New ' + node.shape.shape + ' node';
    }
    return (
        <div>
            <SymbolPaletteComponent id="symbolpalette" palettes={palettes} symbolWidth={80} symbolHeight={80} />
            <DiagramComponent id="diagram" width={'1000px'} height={'500px'} dragEnter={dragEnter} />
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
