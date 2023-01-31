import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
// A node is created and stored in nodes array.
let node = [{
        id: 'node',
        offsetX: 300,
        offsetY: 200,
        shape: {
            type: 'UmlClassifier',
            enumerationShape: {
                name: 'AccountType',
                members: [
                    {
                        name: 'Checking Account', style: {}
                    },
                    {
                        name: 'Savings Account'
                    },
                    {
                        name: 'Credit Account'
                    }
                ]
            },
            classifier: 'Enumeration'
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
