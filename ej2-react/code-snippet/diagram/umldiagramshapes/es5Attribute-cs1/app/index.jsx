import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
// A node is created and stored in nodes array.
let nodes = [{
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
        classifier: 'Class'
    },
}];
document.getElementById('addAttribute').onclick = function () {
    let node = diagramInstance.nodes[0];
    let attributes = { name: 'accepted', type: 'Date', style: { color: "red", } };
    diagramInstance.addChildToUmlNode(node, attributes, "Attribute");
};
// initialize Diagram component
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'100%'} height={'600px'} 
    nodes={nodes}
    />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
