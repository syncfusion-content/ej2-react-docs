{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, DataBinding, MindMap, } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";
//Initializes data source
let data = [
    {
        id: 1,
        Label: "StackPanel",
    },
    {
        id: 2,
        Label: "Label",
        parentId: 1,
    },
    {
        id: 3,
        Label: "ListBox",
        parentId: 1,
    },
    {
        id: 4,
        Label: "StackPanel",
        parentId: 2,
    },
    {
        id: 5,
        Label: "Border",
        parentId: 2,
    },
    {
        id: 6,
        Label: "Border",
        parentId: 4,
    },
    {
        id: 7,
        Label: "Button",
        parentId: 4,
    },
    {
        id: 8,
        Label: "ContentPresenter",
        parentId: 5,
    },
    {
        id: 9,
        Label: "Text Block",
        parentId: 5,
    },
];
let items = new DataManager(data, new Query().take(7));
function App() {
    return (<DiagramComponent id="container" width={"100%"} height={"550px"} 
    //Uses layout to auto-arrange nodes on the diagram page
    layout={{
            //Sets layout type
            type: "MindMap",
        }} 
    //Configures data source for diagram
    dataSourceSettings={{
            id: "id",
            parentId: "parentId",
            dataManager: items,
            root: String(1),
        }} 
    //Sets the default properties for nodes and connectors
    getNodeDefaults={(obj) => {
            obj.shape = {
                type: "Text",
                content: obj.data.Label,
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
      <Inject services={[DataBinding, MindMap]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
{% endraw %}