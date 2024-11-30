import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, NodeModel, PaletteModel, IPaletteExpandArgs } from "@syncfusion/ej2-react-diagrams";
import { ExpandMode } from '@syncfusion/ej2-navigations';

//Expands only one palette at a time
const expandMode: ExpandMode = "Multiple";
//Initialize the basicshapes for the symbol palette
const getBasicShapes: () => NodeModel[] = () => {
    let basicShapes: NodeModel[] = [
        {
            id: 'Rectangle',
            shape: { type: 'Basic', shape: 'Rectangle' },
            style: { strokeWidth: 2 },
        },
        {
            id: 'Ellipse',
            shape: { type: 'Basic', shape: 'RightTriangle' },
            style: { strokeWidth: 2 },
        },
        {
            id: 'Hexagon',
            shape: { type: 'Basic', shape: 'Hexagon' },
            style: { strokeWidth: 2 },
        }
    ];
    return basicShapes;
}
//Initialize the flowshapes for the symbol palette
const getFlowShapes: () => NodeModel[] = () => {
    let flowShapes: NodeModel[] = [
        {
            id: 'Process',
            shape: { type: 'Flow', shape: 'Process' },
            style: { strokeWidth: 2 },
        },
        {
            id: 'Document',
            shape: { type: 'Flow', shape: 'Document' },
            style: { strokeWidth: 2 },
        }
    ];
    return flowShapes;
}

const palettes: PaletteModel[] = [{
    id: 'flow',
    expanded: true,
    symbols: getFlowShapes(),
    title: 'Flow Shapes',
    iconCss: 'e-ddb-icons e-flow'
},
{
    id: 'basic',
    expanded: true,
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
    iconCss: 'e-ddb-icons e-basic'
}
];
const paletteExpanding = (args: IPaletteExpandArgs) => {
    if (args.palette.id === 'basic') {
        // Basic shapes panel does not collapse
        args.cancel = true;
    } else {
        // Flow shapes panel collapse and expand
        args.cancel = false;
    }
}
function App() {
    return (<SymbolPaletteComponent id="symbolpalette" width="100%" height="700px" expandMode={expandMode}
        palettes={palettes} symbolHeight={80} symbolWidth={80} paletteExpanding={paletteExpanding} />);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
