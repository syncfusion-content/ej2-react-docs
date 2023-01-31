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
    return (<SymbolPaletteComponent id="container" expandMode={'Multiple'} palettes={[
            {
                id: 'basic',
                expanded: true,
                symbols: getBasicShapes(),
                title: 'Basic Shapes',
                iconCss: 'e-ddb-icons e-basic',
            },
        ]} 
    //Specifies the size of the symbol
    symbolHeight={80} symbolWidth={80} 
    //Sets the space to be left around a symbol
    symbolMargin={{
            left: 15,
            right: 15,
            top: 15,
            bottom: 15,
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}