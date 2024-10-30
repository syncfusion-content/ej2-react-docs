import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { SymbolPaletteComponent, NodeModel, ConnectorModel, PaletteModel } from '@syncfusion/ej2-react-diagrams';

let symbolPaletteRef;
const expandMode = 'Multiple';
export function getConnectors(): ConnectorModel[] {
    let connectors: ConnectorModel[] = [
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
export function getFlowShapes(): NodeModel[] {
    let flowShapes: NodeModel = [
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
export function removePalette(): void {
    /**
     * parameter - The ID of palette to be removed in symbol palette.
     */
    symbolPaletteRef.current.removePalette('basic');
    symbolPaletteRef.current.refresh();
};
export function removePalettes(): void {
    let palettes = ['flow', 'connectors'];
    /**
     * parameter - The ID array of palettes to be removed in symbol palette.
     */
    symbolPaletteRef.current.removePalettes(palettes);
    symbolPaletteRef.current.refresh();
};
const palettes: PaletteModel[] = [{
    id: 'flow',
    symbols: getFlowShapes(),
    title: 'Flow Shapes',
},
{
    id: 'basic',
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
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
            <input type="button" value="Remove Palette" onClick={removePalette} />
            <input type="button" value="Remove Palettes" onClick={removePalettes} />
            <SymbolPaletteComponent
                id="symbolpalette"
                width="100%"
                height="100%"
                expandMode={expandMode}
                palettes={palettes}
                ref={symbolPaletteRef}
            />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
