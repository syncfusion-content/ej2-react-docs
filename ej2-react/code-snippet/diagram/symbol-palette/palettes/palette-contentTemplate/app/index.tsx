import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, DiagramComponent, NodeModel, PaletteModel, MarginModel, SymbolPreviewModel } from "@syncfusion/ej2-react-diagrams";

// Initializes symbols for the symbol palette.
export function getHTMLShape(): NodeModel[] {
    const HTMLShape: NodeModel[] = [
        {
            id: 'node1',
            shape: {
                type: 'HTML',
                content: '<div style="height:100%; background:#e0f7fa;font-family:Arial;padding-left:5px;"><div style="font-size:12px;font-weight:bold;margin-left:5px;padding-top: 5px;">🌤 28°C</div><div style="font-size:10px;margin-left:5px;">Puducherry</div><div style="font-size:8px; color:#666;margin-left:5px;">Humidity: 60%</div></div>'
            }
        },
        {
            id: 'node2',
            shape: {
                type: 'Native',
                scale: 'Stretch',
                content: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#007BFF"/><path d="M6.5 7.5L17.5 16.5L12 21V3L17.5 7.5L6.5 16.5" fill="none" stroke="white" stroke-width="2"/></svg>'
            }
        }
    ];
    return HTMLShape;
};

const palettes: PaletteModel[]  = [
    {
        id: 'palette1',
        title: 'HTML and SVG Shapes',
        symbols: getHTMLShape(),
        expanded: true
    }
];

const symbolMargin: MarginModel = {
    left: 15,
    right: 15,
    top: 15,
    bottom: 15
};

const symbolPreview: SymbolPreviewModel = {
    height: 100,
    width: 100,
    offset: {
        x: 1,
        y: 0.5
    }
};

// Initializes the symbol palette and Diagram component.
function App() {
    return (
        <div>
            <SymbolPaletteComponent id="symbolpalette" symbolWidth={100} symbolHeight={100} palettes={palettes} expandMode={"Multiple"} symbolMargin={symbolMargin} symbolPreview={symbolPreview} />
            <DiagramComponent id="diagram" width={'100%'} height={'500px'} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
