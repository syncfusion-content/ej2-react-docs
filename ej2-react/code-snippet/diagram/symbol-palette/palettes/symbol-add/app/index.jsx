import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { SymbolPaletteComponent, randomId } from '@syncfusion/ej2-react-diagrams';

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

export function addBasicShape() {
    const node = {
        id: 'Plus' + randomId(),
        shape: { type: 'Basic', shape: 'Plus' },
        style: { strokeWidth: 2 },
    };
    /**
     * parameter 1 - The ID of the palette where the new shape is to be added.
     * parameter 2 - node/connector to be added
     */
    symbolPaletteRef.current.addPaletteItem('basic', node);
}

export function addFlowShape() {
    const node = {
        id: 'Decision' + randomId(),
        shape: { type: 'Flow', shape: 'Decision' },
        style: { strokeWidth: 2 },
    };
    /**
     * parameter 1 - The ID of the palette where the new shape is to be added.
     * parameter 2 - node/connector to be added
     */
    symbolPaletteRef.current.addPaletteItem('flow', node);
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
            <input type="button" value="Add Basic Shape" onClick={addBasicShape} />
            <input type="button" value="Add Flow Shape" onClick={addFlowShape} />
            <SymbolPaletteComponent id="symbolpalette" ref={symbolPaletteRef} width="100%" height="100%"
                expandMode={expandMode} palettes={palettes} symbolHeight={50} symbolWidth={50}
            />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
