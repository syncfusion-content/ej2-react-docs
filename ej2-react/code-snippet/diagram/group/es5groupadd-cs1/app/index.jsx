{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let nodes = [{
        id: "rectangle1",
        offsetX: 100,
        offsetY: 100,
        width: 100,
        height: 100,
        annotations: [{
                content: 'rectangle1'
            }]
    },
    {
        id: "rectangle2",
        offsetX: 200,
        offsetY: 200,
        width: 100,
        height: 100,
        annotations: [{
                content: 'rectangle2'
            }]
    }];
let group = {
    id: 'group2',
    children: ['rectangle1', 'rectangle2']
};
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={'1500px'} height={'600px'} getNodeDefaults={(node) => {
            node.height = 100;
            node.width = 100;
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        }} nodes={nodes} created={() => {
            // Adds the group into the diagram
            diagramInstance.add(group);
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}