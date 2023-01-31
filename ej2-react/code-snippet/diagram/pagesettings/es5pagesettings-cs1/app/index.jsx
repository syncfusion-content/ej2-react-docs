{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let connector = [{
        id: 'connector1',
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
            strokeWidth: 2
        },
        targetDecorator: {
            style: {
                fill: '#6BA5D7',
                strokeColor: '#6BA5D7'
            }
        },
        sourceID: 'node1',
        targetID: 'node2',
    }];
let node = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{
                content: 'Node1'
            }]
    }, {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 350,
        annotations: [{
                content: 'Node3'
            }]
    }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} getNodeDefaults={(node) => {
            node.height = 100;
            node.width = 100;
            node.style.fill = '#6BA5D7';
            node.style.strokeColor = 'white';
            return node;
        }} nodes={node} connectors={connector} 
    // Defines the pageSettings for the diagram
    pageSettings={{
            // Sets the PageOrientation for the diagram to page
            orientation: 'Landscape',
            // Sets the Page Break for diagram
            showPageBreaks: true,
            // Defines the background color and image  of diagram
            background: {
                color: 'grey',
            },
            // Sets the width for the Page
            width: 300,
            // Sets the height for the Page
            height: 300,
            // Sets the space to be left between an annotation and its parent node/connector
            margin: {
                left: 10,
                top: 10,
                bottom: 10,
            },
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}