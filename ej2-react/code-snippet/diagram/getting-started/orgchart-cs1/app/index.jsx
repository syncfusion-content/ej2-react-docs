
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import { HierarchicalTree, Inject, DataBinding } from "@syncfusion/ej2-react-diagrams";
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
            let codes = {
                Director: "rgb(0, 139,139)",
                Manager: "rgb(30, 30,113)",
                Lead: "rgb(0, 100,0)"
            };
            node.width = 70;
            node.height = 30;
            node.annotations = [
                { content: node.data.Name, style: { color: "white" } }
            ];
            node.style.fill = codes[node.data.Role];
            return node;
        }} getConnectorDefaults={(connector) => {
            connector.type = "Orthogonal";
            connector.cornerRadius = 7;
            return connector;
        }}>
      <Inject services={[HierarchicalTree, DataBinding]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
