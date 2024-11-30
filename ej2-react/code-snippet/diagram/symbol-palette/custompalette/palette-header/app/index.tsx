import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, NodeModel, ConnectorModel, PaletteModel } from "@syncfusion/ej2-react-diagrams";
//Initialize the basicshapes for the symbol palette
export function getBasicShapes(): NodeModel[]  {
    let basicShapes: NodeModel[] = [
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
export function getFlowShapes(): NodeModel[] {
    let flowShapes: NodeModel[] = [{
        id: 'process',
        shape: {
            type: 'Flow',
            shape: 'Process'
        }
    },
    {
        id: 'document',
        shape: {
            type: 'Flow',
            shape: 'Document'
        }
    },
    {
        id: 'predefinedprocess',
        shape: {
            type: 'Flow',
            shape: 'PreDefinedProcess'
        }
    }
    ];
    return flowShapes;
};
export function getConnectors(): ConnectorModel[] {
    let connectorSymbols: ConnectorModel[] = [{
        id: 'Link1',
        type: 'Orthogonal',
        sourcePoint: {
            x: 0,
            y: 0
        },
        targetPoint: {
            x: 40,
            y: 40
        },
        targetDecorator: {
            shape: 'Arrow'
        }
    },
    {
        id: 'Link21',
        type: 'Straight',
        sourcePoint: {
            x: 0,
            y: 0
        },
        targetPoint: {
            x: 40,
            y: 40
        },
        targetDecorator: {
            shape: 'Arrow'
        }
    },
    {
        id: 'link33',
        type: 'Bezier',
        sourcePoint: {
            x: 0,
            y: 0
        },
        targetPoint: {
            x: 40,
            y: 40
        },
        style: {
            strokeWidth: 2
        },
        targetDecorator: {
            shape: 'None'
        }
    }
    ];
    return connectorSymbols;
};
const palettes: PaletteModel[] = [{
    //Sets the id of the palette
    id: 'flow',
    //Sets whether the palette expands/collapse its children
    expanded: true,
    //Adds the palette items to palette
    symbols: getFlowShapes(),
    //Sets the header text of the palette
    title: 'Flow Shapes',
    //Sets the header icon of the palette
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
//Initializes the symbol palette
function App() {
    return (<SymbolPaletteComponent id="symbolpalette" width="100%" height="700px" expandMode={"Multiple"}
        palettes={palettes} symbolHeight={80} symbolWidth={80} />);
}
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
