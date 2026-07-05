
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, SymmetricLayout, } from "@syncfusion/ej2-react-diagrams";
let nodes = [];
let connectors = [];
// creating the connection between the layout nodes and connectors.
export function ConnectNodes(parentNode, childNode) {
    let connector = {
        id: parentNode.id + childNode.id,
        sourceID: parentNode.id,
        targetID: childNode.id,
        targetDecorator: {
            shape: "None",
        },
    };
    return connector;
}
// creating the layout nodes as rectangle in shape.
export function GetRectangle(name) {
    let shape = {
        type: "Basic",
        shape: "Ellipse",
    };
    let node = {
        id: name,
        height: 25,
        width: 25,
        borderColor: "white",
        borderWidth: 1,
        style: {
            fill: "#6BA5D7",
        },
        shape: shape,
    };
    return node;
}
// creating the symmetrical layout child elements hierarchy.
export function populateNodes() {
    let parentRect = GetRectangle("p");
    nodes.push(parentRect);
    for (let i = 0; i < 2; i++) {
        let childRect_i = GetRectangle("c" + i);
        nodes.push(childRect_i);
        for (let j = 0; j < 2; j++) {
            let childRect_j = GetRectangle("c" + i + j);
            nodes.push(childRect_j);
            for (let k = 0; k < 6; k++) {
                let childRect_k = GetRectangle("c" + i + j + k);
                nodes.push(childRect_k);
                connectors.push(ConnectNodes(childRect_j, childRect_k));
            }
            connectors.push(ConnectNodes(childRect_i, childRect_j));
        }
        connectors.push(ConnectNodes(parentRect, childRect_i));
    }
    return nodes;
}
//sets the layout child elements
populateNodes();
function App() {
    return (<DiagramComponent id="container" width={"100%"} height={"550px"} layout={{
            //sets the layout as symmetric layout
            type: "SymmetricalLayout",
            springLength: 80,
            springFactor: 0.8,
            maxIteration: 500,
            margin: {
                left: 20,
                top: 20,
            },
        }} nodes={nodes} connectors={connectors} getNodeDefaults={(obj, diagram) => {
            obj.borderColor = "white";
            obj.borderWidth = 1;
            return obj;
        }} getConnectorDefaults={(connector, diagram) => {
            connector.style = {
                strokeColor: "#6BA5D7",
                strokeWidth: 2,
            };
            connector.targetDecorator.style.fill = "#6BA5D7";
            connector.targetDecorator.style.strokeColor = "#6BA5D7";
            return connector;
        }}>
      <Inject services={[SymmetricLayout]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
