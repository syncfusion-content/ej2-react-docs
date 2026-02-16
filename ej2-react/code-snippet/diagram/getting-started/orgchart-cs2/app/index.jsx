
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import { HierarchicalTree, Inject, DataBinding,StackPanel,TextElement,ImageElement } from "@syncfusion/ej2-react-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
export default function App() {
    const data = [
        {
            Name: "Elizabeth",
            Role: "Director"
        },
        {
            Name: "Christina",
            ReportingPerson: "Elizabeth",
            Role: "Manager"
        },
        {
            Name: "Yoshi",
            ReportingPerson: "Christina",
            Role: "Lead"
        },
        {
            Name: "Philip",
            ReportingPerson: "Christina",
            Role: "Lead"
        },
        {
            Name: "Yang",
            ReportingPerson: "Elizabeth",
            Role: "Manager"
        },
        {
            Name: "Roland",
            ReportingPerson: "Yang",
            Role: "Lead"
        },
        {
            Name: "Yvonne",
            ReportingPerson: "Yang",
            Role: "Lead"
        }
    ];
    const dataSettings = {
        id: "Name",
        parentId: "ReportingPerson",
        dataManager: new DataManager(data)
    };
    const layoutSetting = { type: "OrganizationalChart" };
    return (<DiagramComponent id="container" width={"1000px"} height={"550px"} dataSourceSettings={dataSettings} layout={layoutSetting} getNodeDefaults={(node) => {
            node.width = 70;
            node.height = 30;
            return node;
        }} getConnectorDefaults={(connector) => {
            connector.type = "Orthogonal";
            connector.cornerRadius = 7;
            return connector;
        }}
        setNodeTemplate={(node)=>{
            let codes = {
                Director: "rgb(0, 139,139)",
                Manager: "rgb(30, 30,113)",
                Lead: "rgb(0, 100,0)"
              };
              let content = new StackPanel();
              content.id = node.id + "_outerstack";
              content.orientation = "Horizontal";
              content.style.strokeColor = "gray";
              content.style.fill = codes[(node.data).Role];
              content.padding = { left: 5, right: 5, top: 5, bottom: 5}
              let innerContent = new ImageElement();
              innerContent.style.strokeColor = "blue";
              innerContent.id = node.id + "_innerstack";
              innerContent.style.fill = "skyblue";
              innerContent.width = 50;
              innerContent.height = 50;
              let text = new TextElement();
              text.id = node.id + "_text";
              text.content = (node.data).Name;
              text.margin = { left: 15, right: 5, top: 5, bottom: 5}
              text.style.color = "black";
              content.children = [innerContent, text];
              return content;
        }}>
      <Inject services={[HierarchicalTree, DataBinding]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
