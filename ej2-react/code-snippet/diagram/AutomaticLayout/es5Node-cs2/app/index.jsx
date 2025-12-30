
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, DataBinding, ComplexHierarchicalTree, } from "@syncfusion/ej2-react-diagrams";
//Initializes nodes
let node = [
    {
        id: "node1",
        width: 70,
        height: 70,
        annotations: [
            {
                content: "node1",
            },
        ],
    },
    {
        id: "node2",
        width: 70,
        height: 70,
        annotations: [
            {
                content: "node2",
            },
        ],
    },
    {
        id: "node3",
        width: 70,
        height: 70,
        annotations: [
            {
                content: "node3",
            },
        ],
    },
    {
        id: "node4",
        width: 70,
        height: 70,
        annotations: [
            {
                content: "node4",
            },
        ],
    },
    {
        id: "node5",
        width: 70,
        height: 70,
        annotations: [
            {
                content: "node5",
            },
        ],
    },
    {
        id: "node8",
        width: 70,
        height: 70,
        annotations: [
            {
                content: "node8",
            },
        ],
    },
    {
        id: "node9",
        width: 70,
        height: 70,
        annotations: [
            {
                content: "node9",
            },
        ],
    },
];
let connector = [
    {
        id: "connectr",
        sourceID: "node1",
        targetID: "node4",
    },
    {
        id: "connectr1",
        sourceID: "node2",
        targetID: "node4",
    },
    {
        id: "connectr3",
        sourceID: "node3",
        targetID: "node4",
    },
    {
        id: "connectr4",
        sourceID: "node4",
        targetID: "node5",
    },
];
function App() {
    return (<DiagramComponent id="container" width={1000} height={1000} nodes={node} connectors={connector} 
    //Uses layout to auto-arrange nodes on the diagram page
    layout={{
            //Sets layout type
            type: "ComplexHierarchicalTree",
            orientation: "TopToBottom",
        }} 
    //Sets the default properties for nodes and connectors
    getNodeDefaults={(obj) => {
            obj.shape = {
                type: "Text",
            };
            obj.style = {
                fill: "#6BA5D7",
                strokeColor: "none",
                strokeWidth: 2,
            };
            obj.borderColor = "white";
            obj.backgroundColor = "#6BA5D7";
            obj.borderWidth = 1;
            obj.shape.margin = {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5,
            };
            return obj;
        }} getConnectorDefaults={(connector, diagram) => {
            connector.style = {
                strokeColor: "#6BA5D7",
                strokeWidth: 2,
            };
            connector.targetDecorator.style.fill = "#6BA5D7";
            connector.targetDecorator.style.strokeColor = "#6BA5D7";
            connector.type = "Orthogonal";
            return connector;
        }}>
      <Inject services={[ComplexHierarchicalTree, DataBinding]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
