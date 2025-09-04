import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent } from "@syncfusion/ej2-react-diagrams";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";

let palette;
export function getBasicShapes() {
    let basicShapes = [
        { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
        { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
        { id: 'Hexagon', shape: { type: 'Basic', shape: 'Triangle' } },
        { id: 'Star', shape: { type: 'Basic', shape: 'Hexagon' } },
        { id: 'Pentagon', shape: { type: 'Basic', shape: 'Parallelogram' } },
        { id: 'Diamond', shape: { type: 'Basic', shape: 'Diamond' } },
        { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },
        { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' } },
    ];
    return basicShapes;
}
export function getFlowShapes() {
    let flowShapes = [
        { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
        { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
        { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
        { id: 'Document', shape: { type: 'Flow', shape: 'Document' } },
        { id: 'PreDefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
        { id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' } },
        { id: 'SequentialData', shape: { type: 'Flow', shape: 'Card' } },
        { id: 'Sort', shape: { type: 'Flow', shape: 'Collate' } },
    ];
    return flowShapes;
}
export function getSymbolInfo(symbol) {
    return {
        showTooltip: true,
    };
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
const palettes = [{
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
function tooltipChange(args) {
    var checkBox = document.getElementById("showTooltip");
    palette.getSymbolInfo = function (symbol) {
        return { showTooltip: checkBox.checked };
    }
    palette.refresh();
}

function App() {
    return (
        <div>
            <SymbolPaletteComponent id="symbolpalette"
                palettes={palettes}
                ref={symbolpal => (palette = symbolpal)}
                expandMode={'Multiple'}
                width={700}
                height={300}
                symbolPreview={symbolPreview}
                symbolMargin={symbolMargin}
                symbolHeight={70}
                symbolWidth={70}
                getSymbolInfo={getSymbolInfo}
                getNodeDefaults={(node) => {
                    node.style.fill = '#6495ED';
                    node.style.strokeColor = '#6495ED';
                    return node;
                }}/>
            <CheckBoxComponent id="showTooltip" checked={true} change={tooltipChange} /> Show Tooltip
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);

