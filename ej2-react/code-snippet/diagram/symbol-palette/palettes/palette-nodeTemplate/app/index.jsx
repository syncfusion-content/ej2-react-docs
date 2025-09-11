import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, DiagramComponent } from "@syncfusion/ej2-react-diagrams";

// Initializes symbols for the symbol palette.
export function getHTMLShape() {
    let HTMLShape = [
        {
            id: 'node1',
            shape: {
                type: 'HTML'
            }
        }
    ];
    return HTMLShape;
};

const palettes = [
    {
        id: 'palette1',
        title: 'HTML Shape',
        symbols: getHTMLShape(),
        expanded: true
    }
];

const symbolMargin = {
    left: 15,
    right: 15,
    top: 15,
    bottom: 15
};

const symbolPreview = {
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
            <script id="nodeTemplate" type="text/x-template">
            <div style={{ height: '100%', backgroundColor: '#e0f7fa', fontFamily: 'Arial', paddingLeft: '10px',}}>
                <div style={{ fontSize: '12px', fontWeight: 'bold',}}>🌤 28°C</div>
                <div style={{ fontSize: '10px', }}>Puducherry</div>
                <div style={{ fontSize: '8px', color: '#666', }}>Humidity: 60%</div>
            </div>
            </script>
            <SymbolPaletteComponent id="symbolpalette" symbolWidth={100} symbolHeight={100} palettes={palettes} expandMode={"Multiple"} symbolMargin={symbolMargin} symbolPreview={symbolPreview} nodeTemplate={'#nodeTemplate'} />
            <DiagramComponent id="diagram" width={'100%'} height={'500px'} nodeTemplate={'#nodeTemplate'} />
        </div>);
}

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
