import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { SymbolPaletteComponent } from '@syncfusion/ej2-react-diagrams';

let symbolPaletteRef;
const expandMode = 'Multiple';
export function getBasicShapes() {
    let basicShapes = [
        {
            id: 'Rectangle',
            shape: { type: 'Basic', shape: 'Rectangle' },
            style: { strokeWidth: 2 },
        },
        {
            id: 'Ellipse',
            shape: { type: 'Basic', shape: 'Ellipse' },
            style: { strokeWidth: 2 },
        },
    ];
    return basicShapes;
}
export function getFlowShapes() {
    let flowShapes = [
        {
            id: 'Process',
            shape: { type: 'Flow', shape: 'Process' },
            style: { strokeWidth: 2 },
        },
        {
            id: 'Document',
            shape: { type: 'Flow', shape: 'Document' },
            style: { strokeWidth: 2 },
        },
    ];
    return flowShapes;
}
export function rmvBasicShape() {
    const id = symbolPaletteRef.current.palettes[0].symbols[0]?.id;
    /**
     * parameter 1 - The ID of the palette where the shape to be removed.
     * parameter 2 - ID of the shape to be removed
     */
    symbolPaletteRef.current.removePaletteItem('basic', id);
}
export function rmvFlowShape() {
    const id = symbolPaletteRef.current.palettes[1].symbols[0]?.id;
    /**
     * parameter 1 - The ID of the palette where the shape to be removed.
     * parameter 2 - ID of the shape to be removed
     */
    symbolPaletteRef.current.removePaletteItem('flow', id);
}
const palettes = [
    {
        id: 'basic',
        expanded: true,
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
    },
    {
        id: 'flow',
        expanded: true,
        symbols: getFlowShapes(),
        title: 'Flow Shapes',
    },
];
function App() {
    symbolPaletteRef = useRef(null);
    return (
        <div>
            <input type="button" value="Remove Basic Shape" onClick={rmvBasicShape} />
            <input type="button" value="Remove Flow Shape" onClick={rmvFlowShape} />
            <SymbolPaletteComponent id="symbolpalette" ref={symbolPaletteRef} width="100%" height="100%"
                expandMode={expandMode} palettes={palettes} symbolHeight={50} symbolWidth={50}
            />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
