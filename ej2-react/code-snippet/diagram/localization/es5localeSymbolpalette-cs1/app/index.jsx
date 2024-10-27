import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, } from "@syncfusion/ej2-react-diagrams";
import { L10n, setCulture } from '@syncfusion/ej2-base';
// Set the default culture to German
setCulture('de');

// Load locale text for the SearchShapes
L10n.load({
  'de-DE': {
    SymbolPalette: {
      SearchShapes: 'Formen suchen',
    },
  },
});

//Initialize the basicshapes for the symbol palette
export function getBasicShapes() {
    let basicShapes = [
        {
            id: "Rectangle",
            shape: {
                type: "Basic",
                shape: "Rectangle",
            },
        },
        {
            id: "Ellipse",
            shape: {
                type: "Basic",
                shape: "Ellipse",
            },
        },
        {
            id: "Hexagon",
            shape: {
                type: "Basic",
                shape: "Hexagon",
            },
        },
    ];
    return basicShapes;
}
//Initializes the symbol palette
function App() {
    return (<SymbolPaletteComponent id="container" 
    //Set locale
    locale='de-DE'
    enableSearch={true}
    expandMode={"Multiple"} 
    palettes={[
            {
                id: "basic",
                expanded: true,
                symbols: getBasicShapes(),
                title: "Basic Shapes",
                iconCss: "e-ddb-icons e-basic",
            },
        ]} symbolHeight={80} symbolWidth={80}
        />);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);