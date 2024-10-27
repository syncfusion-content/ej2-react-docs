import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent ,NodeModel,UmlClassifierShapeModel} from "@syncfusion/ej2-react-diagrams";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
let diagramInstance:DiagramComponent;
// A node is created and stored in nodes array.
let nodes:NodeModel[] = [{
    id: 'node1',
    offsetX: 150,
    offsetY: 150, 
    style: {
        fill: '#26A0DA',
    },
    shape: {
        type: 'UmlClassifier',
        classShape: {
            attributes: [
                { name: 'accepted', type: 'Date', },
            ],
            methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
            name: 'Patient'
        },
        classifier: 'Class',
    } as UmlClassifierShapeModel
},
{
    id: 'node2',
    offsetX: 400,
    offsetY: 200, 
    style: {
        fill: '#26A0DA',
    },
    shape: {
        type: 'UmlClassifier',
        enumerationShape: {
            name: 'AccountType',
            members: [
                {
                    name: 'Checking Account', 
                },
            ]
        },
        classifier: 'Enumeration',
    }as UmlClassifierShapeModel,
}];

const addMethod = function() {
    let node = diagramInstance.nodes[0];
    let methods = {
        name: 'getHistory',
        style: { color: 'red' },
        parameters: [{ name: 'Date', style: {} }],
        type: 'History',
    };
    diagramInstance.addChildToUmlNode(node, methods, 'Method');

}

const addAttribute = function() {
    let node = diagramInstance.nodes[0];
    let attributes = { name: 'accepted', type: 'Date', style: { color: "red", } };
    diagramInstance.addChildToUmlNode(node, attributes, "Attribute");
    
}
const addMember = function() {
    let node = diagramInstance.nodes[1];
    let members = { name: 'Checking new', style: { color: "red", }, isSeparator: true };
    diagramInstance.addChildToUmlNode(node, members, "Member");
    
}
// initialize Diagram component
function App() {
    return (<div>
        <ButtonComponent content="Add Method" onClick={addMethod}/>
        <ButtonComponent content="Add Attribute" onClick={addAttribute}/>
        <ButtonComponent content="Add Member" onClick={addMember}/>
    <DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} 
    nodes={nodes}
    /></div>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
