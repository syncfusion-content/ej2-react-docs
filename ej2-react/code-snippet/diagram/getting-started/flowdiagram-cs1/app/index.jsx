{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
export default function App() {
    const nodes = [
        {
            id: "node1",
            offsetY: 50,
            shape: { type: "Flow", shape: "Terminator" },
            annotations: [
                {
                    content: "Start"
                }
            ]
        },
        {
            id: "node2",
            offsetY: 140,
            shape: { type: "Flow", shape: "Process" },
            annotations: [
                {
                    content: "var i = 0;"
                }
            ]
        },
        {
            id: "node3",
            offsetY: 230,
            shape: { type: "Flow", shape: "Decision" },
            annotations: [
                {
                    content: "i < 10?"
                }
            ]
        },
        {
            id: "node4",
            offsetY: 320,
            shape: { type: "Flow", shape: "PreDefinedProcess" },
            annotations: [
                {
                    content: 'print("Hello!!");'
                }
            ]
        },
        {
            id: "node5",
            offsetY: 410,
            shape: { type: "Flow", shape: "Process" },
            annotations: [
                {
                    content: "i++;"
                }
            ]
        },
        {
            id: "node6",
            offsetY: 500,
            shape: { type: "Flow", shape: "Terminator" },
            annotations: [
                {
                    content: "End"
                }
            ]
        }
    ];
    const connectors = [
        {
            id: "connector1",
            sourceID: "node1",
            targetID: "node2"
        },
        {
            id: "connector2",
            sourceID: "node2",
            targetID: "node3"
        },
        {
            id: "connector3",
            sourceID: "node3",
            targetID: "node4",
            annotations: [{ content: "Yes" }]
        },
        {
            id: "connector4",
            sourceID: "node3",
            targetID: "node6",
            annotations: [{ content: "No" }],
            type: 'Orthogonal',
            segments: [
                { type: 'Orthogonal', length: 50, direction: "Right" },
                { type: 'Orthogonal', length: 300, direction: "Bottom" }
            ]
        },
        {
            id: "connector5",
            sourceID: "node4",
            targetID: "node5"
        },
        {
            id: "connector6",
            sourceID: "node5",
            targetID: "node3",
            type: 'Orthogonal',
            segments: [
                { length: 50, type: 'Orthogonal', direction: "Left" },
                { length: 200, type: 'Orthogonal', direction: "Top" }
            ]
        }
    ];
    return (<DiagramComponent id="container" width={"100%"} height={"600px"} nodes={nodes} connectors={connectors} getNodeDefaults={(node) => {
            node.height = 50;
            node.width = 140;
            if(node.id === "node1" || node.id === "node4"){
                 node.style = { fill: "#357BD2", strokeColor: "white" };
            }else if(node.id === "node2" || node.id === "node5"){
                 node.style = { fill: "yellow", strokeColor: "white" };
            }else if(node.id === "node3"){
                 node.style = { fill: "#00FF00", strokeColor: "white" };
            }else if(node.id === "node6"){
                    node.style = { fill: "red", strokeColor: "white" };
            }
            node.offsetX = 300;
            return node;
        }} getConnectorDefaults={(obj) => {
            obj.type = "Orthogonal";
            obj.targetDecorator = { shape: 'Arrow', width: 10, height: 10 };
            return obj;
        }}/>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);

{% endraw %}