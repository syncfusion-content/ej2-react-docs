import * as React from "react";
import * as ReactDOM from "react-dom";
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { SymbolPaletteComponent, PaletteModel, NodeModel } from "@syncfusion/ej2-react-diagrams";

//Initialize the basic shapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
        {
            id: 'Rectangle',
            shape: {
                type: 'Basic',
                shape: 'Rectangle',
            },
        },
        {
            id: 'Ellipse',
            shape: {
                type: 'Basic',
                shape: 'Ellipse',
            },
        },
        {
            id: 'Hexagon',
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
    symbols: getBasicShapes(),
    title: 'Basic Shapes',
}];

// Override the global culture and localization value 
const locale: string = 'de-DE';

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
//Initializes the symbol palette
function App() {
    return (<SymbolPaletteComponent id="symbolpalette" palettes={palettes} enableSearch={true}
        locale={locale} symbolWidth={80} symbolHeight={80} enableAnimation={false} />);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
