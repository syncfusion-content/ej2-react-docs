import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { DiagramComponent, SymbolPaletteComponent } from "@syncfusion/ej2-react-diagrams";

const nodes = [
    {
        offsetX: 250,
        offsetY: 250,
        width: 100,
        height: 100,
        visible: true,
        style: { fill: '#6AA8D7', strokeWidth: 1 },
    }
];
export function getSymbols() {
    let shapes = [
        {
            id: 'n1',
            height: 50,
            width: 50,
            offsetX: 50,
            offsetY: 50,
            style: { fill: 'green' },
        },
        {
            id: 'n2',
            height: 50,
            width: 50,
            offsetX: 100,
            offsetY: 100,
            style: { fill: 'yellow' },
        },
        {
            id: 'group1',
            children: ['n1', 'n2'],
            padding: { left: 10, right: 10, top: 10, bottom: 10 },
        },
        {
            id: 'n3',
            height: 50,
            width: 50,
            offsetX: 100,
            offsetY: 100,
            style: { fill: 'pink' },
        },
        {
            id: 'n4',
            height: 50,
            width: 50,
            offsetX: 100,
            offsetY: 170,
            style: { fill: 'orange' },
        },
        {
            id: 'group2',
            children: ['n3', 'n4'],
            padding: { left: 10, right: 10, top: 10, bottom: 10 },
        },
    ];
    return shapes;
}
const palettes = [
    {
        id: 'palette1',
        title: 'Basic Shapes',
        symbols: getSymbols(),
        expanded: true,
    }
]
function App() {
    const diagramRef = useRef(null);
    return (
        <div>
            <SymbolPaletteComponent id="symbolpalette" width="30%" palettes={palettes} />
            <DiagramComponent id="diagram" ref={diagramRef} width="70%" height="645px" nodes={nodes}
                created={() => {
                    diagramRef.current.fitToPage({ mode: 'Width' });
                }}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);