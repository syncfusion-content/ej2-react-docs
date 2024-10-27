import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
// A node is created and stored in nodes array.
let node = [{
    id: "Patient",
    //Position of the node
    offsetX: 200,
    offsetY: 200,
    style: {
        fill: '#26A0DA',
    },
    shape: {
        type: "UmlClassifier",
        //Define interface object
        interfaceShape: {
            name: "Patient",
            //Define interface attributes
            attributes: [{ name: "owner", type: "String[*]" }],
            //Define interface methods
            methods: [
                {
                    name: "deposit",
                    parameters: [
                        {
                            name: "amount",
                            type: "Dollars"
                        }
                    ]
                }
            ]
        },
        classifier: "Interface"
    }
}];
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'}
        // Add node
        nodes={node} />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
