{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, } from "@syncfusion/ej2-react-diagrams";
//Initialize the basicshapes for the symbol palette
export function getBasicShapes() {
    let basicShapes = [
        {
            id: "Rectangle",
            shape: {
                type: "Basic",
                shape: "Rectangle",
                symbolInfo: { description: { text: "Rectangle" } },
            },
        },
        {
            id: "Ellipse",
            shape: {
                type: "Basic",
                shape: "Ellipse",
                symbolInfo: { description: { text: "Ellipse" } },
            },
        },
        {
            id: "Hexagon",
            shape: {
                type: "Basic",
                shape: "Hexagon",
                symbolInfo: { description: { text: "Hexagon" } },
            },
        },
    ];
    return basicShapes;
}
//Initialize the flowshapes for the symbol palette
export function getFlowShapes() {
    let flowShapes = [
        {
            id: "Process",
            shape: {
                type: "Flow",
                shape: "Process",
            },
        },
        {
            id: "Document",
            shape: {
                type: "Flow",
                shape: "Document",
            },
        },
    ];
    return flowShapes;
}
//Initializes the symbol palette
function App() {
    return (<SymbolPaletteComponent id="container" expandMode={'Multiple'} palettes={[
            {
                id: 'basic',
                expanded: true,
                symbols: getBasicShapes(),
                title: 'Basic Shapes',
                iconCss: 'e-ddb-icons e-basic',
            },
            {
                id: 'flow',
                expanded: true,
                symbols: getFlowShapes(),
                title: 'Flow Shapes',
                iconCss: 'e-ddb-icons e-flow',
            },
        ]} symbolHeight={80} symbolWidth={80} 
    //Specifies the preview size and position to symbol palette items.
    symbolPreview={{
            height: 100,
            width: 100,
            offset: {
                x: 0.5,
                y: 0.5,
            },
        }} 
    //Sets the margin of the dragging helper relative to the mouse cursor
    symbolMargin={{
            left: 12,
            right: 12,
            top: 12,
            bottom: 12,
        }} getSymbolInfo={(symbol) => {
            //Defines the symbol description
            return {
                width: 75,
                height: 40,
                description: {
                    text: symbol.shape["shape"],
                    color: "red",
                    bold: true,
                    fontSize: 15,
                    fontFamily: "Arial",
                    italic: true,
                    textDecoration: "Underline",
                    margin: { top: 30, left: 0, right: 0, bottom: 30 },
                },
            };
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}