
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, HierarchicalTree, DataBinding, Rect, } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";
//Initializes data source
let data = [
    {
        Name: "Steve-Ceo",
        //set the offsetX and offsetY for the parent node
        offsetX: 250,
        offsetY: 50,
    },
    {
        Name: "Kevin-Manager",
        ReportingPerson: "Steve-Ceo",
    },
    {
        Name: "Peter-Manager",
        ReportingPerson: "Steve-Ceo",
    },
    {
        Name: "John- Manager",
        ReportingPerson: "Peter-Manager",
    },
    {
        Name: "Mary-CSE ",
        ReportingPerson: "Peter-Manager",
    },
    {
        Name: "Jim-CSE ",
        ReportingPerson: "Kevin-Manager",
    },
    {
        Name: "Martin-CSE",
        ReportingPerson: "Kevin-Manager",
    },
];
let items = new DataManager(data, new Query().take(7));
function App() {
    return (<DiagramComponent id="container" width={"100%"} height={"550px"} 
    //Defines default layout
    layout={{
            type: "HierarchicalTree",
            bounds: new Rect(0, 0, 500, 500),
            horizontalSpacing: 25,
            verticalSpacing: 30,
            horizontalAlignment: "Left",
            verticalAlignment: "Top",
        }} dataSourceSettings={{
            id: "Name",
            parentId: "ReportingPerson",
            dataManager: items,
        }} 
    //Sets the default properties of the node.
    getNodeDefaults={(obj) => {
            obj.shape = {
                type: "Text",
                content: obj.data.Name,
            };
            obj.style = {
                fill: "None",
                strokeColor: "none",
                strokeWidth: 2,
                bold: true,
                color: "white",
            };
            obj.width = 50;
            obj.height = 40;
            obj.borderColor = "white";
            obj.backgroundColor = "#6BA5D7";
            obj.borderWidth = 1;
            obj.shape.margin = {
                left: 25,
                right: 25,
                top: 25,
                bottom: 25,
            };
            return obj;
        }} 
    //Sets the default properties of the connector.
    getConnectorDefaults={(connector, diagram) => {
            connector.style = {
                strokeColor: "#6BA5D7",
                strokeWidth: 2,
            };
            connector.targetDecorator.style.fill = "#6BA5D7";
            connector.targetDecorator.style.strokeColor = "#6BA5D7";
            connector.type = "Orthogonal";
            return connector;
        }}>
      <Inject services={[DataBinding, HierarchicalTree]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
