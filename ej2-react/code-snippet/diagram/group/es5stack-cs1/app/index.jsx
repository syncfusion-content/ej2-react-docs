{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, StackPanel, TextElement, } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let nodes = [{
        id: 'node5',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7'
        },
        annotations: [{
                content: 'Custom Template',
                offset: {
                    y: 1
                },
                verticalAlignment: 'Top'
            }]
    },];
let count = 11;
let getTextElement = (text) => {
    let textElement = new TextElement();
    textElement.id = "text" + count;
    textElement.width = 50;
    textElement.height = 20;
    textElement.content = text;
    count++;
    return textElement;
};
let addRows = (column) => {
    column.children.push(getTextElement('Row1'));
    column.children.push(getTextElement('Row2'));
    column.children.push(getTextElement('Row3'));
    column.children.push(getTextElement('Row4'));
};
//Intialize Diagram Component
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={900} height={900} nodes={nodes} getNodeDefaults={(node) => {
            node.height = 100;
            node.width = 100;
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        }} setNodeTemplate={(obj, diagram) => {
            if (obj.id.indexOf('node5') !== -1) {
                // It will be replaced with grid panel
                let table = new StackPanel();
                table.orientation = 'Horizontal';
                table.padding.left;
                let column1 = new StackPanel();
                column1.children = [];
                column1.children.push(getTextElement('Column1'));
                addRows(column1);
                let column2 = new StackPanel();
                column2.children = [];
                column2.children.push(getTextElement('Column2'));
                addRows(column2);
                table.children = [column1, column2];
                return table;
            }
            return null;
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}