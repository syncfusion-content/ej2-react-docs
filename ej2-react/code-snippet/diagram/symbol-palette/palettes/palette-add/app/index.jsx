import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { SymbolPaletteComponent, randomId } from '@syncfusion/ej2-react-diagrams';

let symbolPaletteRef;
export function getConnectors() {
    let connectors = [
        {
            id: 'Link1',
            type: 'Orthogonal',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: '#757575' },
            targetDecorator: {
                shape: 'Arrow',
                style: { strokeColor: '#757575', fill: '#757575' },
            },
        },
        {
            id: 'link3',
            type: 'Orthogonal',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        },
        {
            id: 'Link21',
            type: 'Straight',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: '#757575' },
            targetDecorator: {
                shape: 'Arrow',
                style: { strokeColor: '#757575', fill: '#757575' },
            },
        },
        {
            id: 'link23',
            type: 'Straight',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        },
        {
            id: 'link33',
            type: 'Bezier',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: 'None' },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        },
    ];
    return connectors;
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
        {
            id: 'predefinedprocess',
            shape: {
                type: 'Flow',
                shape: 'PreDefinedProcess',
            },
        },
    ];
    return flowShapes;
}

export function addPalette() {
    const newPaletteShapes = [
        {
            id: 'rectangle' + randomId(),
            shape: { type: 'Basic', shape: 'Rectangle' },
        },
        {
            id: 'plus' + randomId(),
            shape: { type: 'Basic', shape: 'Plus' },
        },
    ];
    const newPalette = [
        {
            id: 'basic' + randomId(),
            symbols: newPaletteShapes,
            title: 'New Shapes',
        },
    ];
    /**
     * parameter - The new palette to be added in symbol palette.
     */
    symbolPaletteRef.current.addPalettes(newPalette);
};
const palettes = [{
    id: 'flow',
    symbols: getFlowShapes(),
    title: 'Flow Shapes',
},
{
    id: 'connectors',
    symbols: getConnectors(),
    title: 'Connectors',
}];
function App() {
    symbolPaletteRef = useRef(null);
    return (
        <div>
            <input type="button" value="Add Palette" onClick={addPalette} />
            <SymbolPaletteComponent id="symbolpalette" ref={symbolPaletteRef} palettes={palettes} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
