import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent } from "@syncfusion/ej2-react-diagrams";

//Initializes symbols for the symbol palette
export function getGroupNodes() {
    let groups = [
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
    return groups;
}
const palettes = [
    {
        id: 'palette1',
        title: 'Group Nodes',
        symbols: getGroupNodes(),
        expanded: true,
    }
];
//Initializes the symbol palette
function App() {
    return (<SymbolPaletteComponent id="symbolpalette"
        //Defines how many palettes can be at expanded mode at a time
        expandMode={"Multiple"}
        //Defines the palette collection
        palettes={palettes}
        width="100%" height="100%" />);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
