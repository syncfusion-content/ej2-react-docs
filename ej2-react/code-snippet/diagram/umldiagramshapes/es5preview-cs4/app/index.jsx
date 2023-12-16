{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { SymbolPaletteComponent, } from "@syncfusion/ej2-react-diagrams";
//Initialize the basicshapes for the symbol palette
export function getUmlShapes() {
    let umlShapes = [
        {
            id: 'class',
            style: {
                fill: '#26A0DA',
            },
            borderColor: 'white',
            shape: {
                type: 'UmlClassifier',
                classShape: {
                    attributes: [
                        { name: 'accepted', type: 'Date', style: { color: "red", fontFamily: "Arial", textDecoration: 'Underline',  italic: true },isSeparator: true },
                    ],
                    methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
                    name: 'Patient'
                },
                classifier: 'Class'
            },
        },
        {
            id: 'Interface',
            style: {
                fill: '#26A0DA',
            }, borderColor: 'white',
            shape: {
                type: 'UmlClassifier',
                interfaceShape: {
                    name: "Bank Account",
                },
                classifier: 'Interface'
            },
        },
        {
            id: 'Enumeration',
            style: {
                fill: '#26A0DA',
            }, borderColor: 'white',
            shape: {
                type: 'UmlClassifier',
                enumerationShape: {
                    name: 'AccountType',
                    members: [
                        {
                            name: 'Checking Account', style: {}
                        },
                    ]
                },
                classifier: 'Enumeration'
            },
        },
    ];
    return umlShapes;
}
//Initializes the symbol palette
function App() {
    return (<SymbolPaletteComponent id="container" palettes={[
            {
                id: 'uml',
                expanded: true,
                symbols: getUmlShapes(),
                title: 'UML Shapes',
            },
        ]} symbolHeight={80} symbolWidth={80}
        getNodeDefaults={(symbol) => {
            symbol.width = 100;
            symbol.height = 100;
        }}
        //Sets the margin of the dragging helper relative to the mouse cursor
        symbolMargin={{
            left: 12,
            right: 12,
            top: 12,
            bottom: 12,
        }} getSymbolInfo={(symbol) => {
            //Defines the symbol description
            return { fit: true,description: { text: symbol.id, } };
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}