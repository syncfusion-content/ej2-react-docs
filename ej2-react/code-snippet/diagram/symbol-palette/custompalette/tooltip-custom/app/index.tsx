import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, NodeModel, PaletteModel, SymbolInfo } from "@syncfusion/ej2-react-diagrams";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";

let palette: SymbolPaletteComponent;
let checkBox: CheckBoxComponent;

//Initialize the basic shapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
        { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
        { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
        { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
        { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
        { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
        { id: 'Diamond', shape: { type: 'Basic', shape: 'Diamond' } },
        { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },
        { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' } },
    ];
    return basicShapes;
}

//Initialize the flow shapes for the symbol palette
export function getFlowShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
        { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
        { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
        { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
        { id: 'Document', shape: { type: 'Flow', shape: 'Document' } },
        { id: 'PreDefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
        { id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' } },
        { id: 'Card', shape: { type: 'Flow', shape: 'Card' } },
        { id: 'Collate', shape: { type: 'Flow', shape: 'Collate' } },
    ];
    return basicShapes;
}
function getSymbolInfo(symbol: SymbolInfo): SymbolInfo {
    return { showTooltip: (checkBox && (checkBox as any).checked) };
}
const symbolPreview = {
    height: 8,
    width: 80,
};
const symbolMargin = {
    left: 15,
    right: 15,
    top: 15,
    bottom: 15,
};
function tooltipChange() {
    palette.refresh();
}
const palettes: PaletteModel[] = [{
    id: 'flow',
    expanded: true,
    symbols: getFlowShapes(),
    title: 'Flow Shapes',
},
{
    id: 'basic',
    expanded: true,
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
}];

function App() {
    return (
        <div>
            <SymbolPaletteComponent id="symbolpalette"
                ref={symbolpal => (palette = symbolpal)}
                expandMode={'Multiple'}
                palettes={palettes}
                width={700}
                height={300}
                symbolPreview={symbolPreview}
                symbolMargin={symbolMargin}
                symbolHeight={70}
                symbolWidth={70}
                //Enable/disable tooltip for the symbols
                getSymbolInfo={getSymbolInfo}
                getNodeDefaults={(symbol: NodeModel) => {
                    symbol.style.fill = '#6495ED';
                    symbol.style.strokeColor = '#6495ED';
                    return symbol;
                }}/>
            <CheckBoxComponent id="showTooltip" ref={checkbox => (checkBox = checkbox)} checked={true} change={tooltipChange} /> Show Tooltip
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);