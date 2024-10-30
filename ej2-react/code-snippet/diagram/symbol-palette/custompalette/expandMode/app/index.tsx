import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import { SymbolPaletteComponent, PaletteModel} from "@syncfusion/ej2-react-diagrams";
import { ExpandMode } from '@syncfusion/ej2-navigations';

//Initialize the basicshapes for the symbol palette
const getBasicShapes = () => {
    var basicShapes = [
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
const getFlowShapes = () => {
    var flowShapes = [
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
//Initialize connectors for symbol palette
const getConnectors = () => {
    var connectors = [
        {
            id: 'Straight',
            type: 'Straight',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: 'Arrow',
                style: { strokeColor: '#757575', fill: '#757575' },
            },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        },
        {
            id: 'Orthogonal',
            type: 'Orthogonal',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' },
            },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        },
        {
            id: 'Bezier',
            type: 'Bezier',
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: {
                shape: 'Arrow',
                style: { strokeColor: '#757575', fill: '#757575' },
            },
            style: { strokeWidth: 1, strokeColor: '#757575' },
        }
    ];
    return connectors;
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
},
{
    id: 'connectors',
    expanded: true,
    symbols: getConnectors(),
    title: 'Connectors',
    iconCss: 'e-ddb-icons e-connector'
}
];
function App() {
    const [expandMode, setEnableAnimation] = useState<ExpandMode>("Single");
    // Toggle expandMode function
    const toggleExpandMode = (event: any) => {
        setEnableAnimation(event.target.value as ExpandMode);
    };
    return (
        <div>
            <label htmlFor="expandMode">Expand Mode: </label>
            <select id="expandMode" onChange={toggleExpandMode}>
                <option value="Single">Single</option>
                <option value="Multiple">Multiple</option>
            </select>
            <SymbolPaletteComponent id="symbolpalette" width="100%" height="700px" expandMode={expandMode}
                palettes={palettes} symbolHeight={80} symbolWidth={80} />
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
