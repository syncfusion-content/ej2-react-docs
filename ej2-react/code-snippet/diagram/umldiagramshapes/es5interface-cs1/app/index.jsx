import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
// A node is created and stored in nodes array.
let node = [{
        id: 'node',
        offsetX: 400,
        offsetY: 300,
        shape: {
            type: 'UmlClassifier',
            interfaceShape: {
                name: "Bank Account",
                property: [{
                        name: "owner",
                        type: "String[*]", style: {}
                    },
                    {
                        name: "balance",
                        type: "Dollars"
                    }],
                methods: [{
                        name: "deposit", style: {},
                        parameters: [{
                                name: "amount",
                                type: "Dollars",
                                style: {}
                            }],
                    }]
            },
            classifier: 'Interface'
        }
    }];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Add node
    nodes={node}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
