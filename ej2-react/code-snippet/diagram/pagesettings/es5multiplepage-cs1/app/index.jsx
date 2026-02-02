{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let connector = [{
        id: 'connector1',
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
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 350,
        annotations: [{
            content: 'Node2'
        }]
    }
];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} nodes={node} connectors={connector} 
    // Defines the pageSettings for the diagram
    pageSettings={{
            // Sets the Multiple page for diagram
            multiplePage: true,
            // Sets the Page Break for diagram
            showPageBreaks: true,
            width: 300,
            height: 300,
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}