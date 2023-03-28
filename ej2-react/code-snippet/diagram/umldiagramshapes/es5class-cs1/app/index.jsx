import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
// A node is created and stored in nodes array.
let node = [{
        id: 'Patient',
        shape: {
            type: 'UmlClassifier',
            classShape: {
                name: 'Patient',
                attributes: [
                    createProperty('name', 'Name'),
                    createProperty('title', 'String[*]'),
                    createProperty('gender', 'Gender')
                ]
            },
            classifier: 'Class'
        },
        offsetX: 405,
        offsetY: 105
    }];
//create class Property
function createProperty(name, type) {
    return { name: name, type: type };
}
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Add node
    nodes={node}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
