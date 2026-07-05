
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, HierarchicalTree, } from "@syncfusion/ej2-react-diagrams";
//Initializes data source
//let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
let diagramInstance;
let nodes = [
    {
        id: "node1",
        width: 140,
        height: 50,
        isExpanded: false,
        annotations: [
            {
                content: "node1",
            },
        ],
        expandIcon: {
            shape: "Plus",
        },
        collapseIcon: {
            shape: "Minus",
        },
    },
    {
        id: "node2",
        width: 140,
        height: 50,
        annotations: [
            {
                content: "node2",
            },
        ],
    },
    {
        id: "node3",
        width: 140,
        height: 50,
        annotations: [
            {
                content: "node3",
            },
        ],
    },
];
let connectors = [
    {
        // Name of the connector
        id: "connector1",
        // ID of the source and target nodes
        sourceID: "node1",
        targetID: "node2",
    },
    {
        id: "connector2",
        // ID of the source and target nodes
        sourceID: "node2",
        targetID: "node3",
    },
];
function App() {
    return (<DiagramComponent id="container" ref={(diagram) => (diagramInstance = diagram)} width={"1250px"} height={"590px"} nodes={nodes} connectors={connectors} snapSettings={{
            constraints: 0,
        }} created={(args) => {
            diagramInstance.fitToPage();
        }} layout={{
            // set enableAnimation as true
            enableAnimation: true,
            type: "HierarchicalTree",
            margin: {
                top: 20,
            },
            getLayoutInfo: (node, tree) => {
                if (!tree.hasSubTree) {
                    tree.orientation = "Vertical";
                    tree.type = "Alternate";
                }
            },
        }} 
    //Sets the default properties for nodes and connectors
    getNodeDefaults={(obj) => {
            obj.shape = {
                type: "Text",
                style: {
                    color: "white",
                },
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
      <Inject services={[HierarchicalTree]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
