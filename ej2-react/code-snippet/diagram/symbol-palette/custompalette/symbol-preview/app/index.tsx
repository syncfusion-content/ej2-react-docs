import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, DiagramComponent, NodeModel, PaletteModel, MarginModel, SymbolPreviewModel } from "@syncfusion/ej2-react-diagrams";
//Initialize the basic shapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
        {
            id: 'Rectangle-symbol',
            shape: {
                type: 'Basic',
                shape: 'Rectangle',
            },
        },
        {
            id: 'Ellipse-symbol',
            shape: {
                type: 'Basic',
                shape: 'Ellipse',
            },
        },
        {
            id: 'Hexagon-symbol',
            shape: {
                type: 'Basic',
                shape: 'Hexagon',
            },
        },
    ];
    return basicShapes;
}
const palettes: PaletteModel[] = [{
    id: 'basic',
    expanded: true,
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
    iconCss: 'e-ddb-icons e-basic'
}];
const getSymbolInfo = () => {
    // Enables to fit the content into the specified palette item size
    return {
        fit: true
    };
    // When it is set as false, the element is rendered with actual node size
};
//Sets the space to be left around a symbol
const symbolMargin: MarginModel = {
    left: 15,
    right: 15,
    top: 15,
    bottom: 15
};
//Specifies the preview size and position to symbol palette items.
const symbolPreview: SymbolPreviewModel = {
    height: 100,
    width: 100,
    offset: {
        x: 1,
        y: 0.5
    }
}
function App() {
    return (
        <div>
            <SymbolPaletteComponent id="symbolpalette" symbolWidth={80} symbolHeight={80} palettes={palettes}
                expandMode={"Multiple"} symbolMargin={symbolMargin} symbolPreview={symbolPreview} getSymbolInfo={getSymbolInfo} />
            <DiagramComponent id="diagram" width={'100%'} height={'500px'} />
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
