{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import {
  Node,
  HierarchicalTree,
  Diagram,
  NodeModel,
  ConnectorModel,
  Inject,
  DataBinding
} from "@syncfusion/ej2-react-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
export interface EmployeeInfo {
  Name: string;
  Role: string;
  color: string;
}
export default function App() {
  const data: Object[] = [
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
  const dataSettings: object = {
    id: "Name",
    parentId: "ReportingPerson",
    dataManager: new DataManager(data as JSON[])
  }
  const layoutSetting: object= { type: "OrganizationalChart" }
  return (
    <DiagramComponent
      id="container"
      width={"100%"}
      height={"350px"}
      dataSourceSettings={dataSettings}
      layout={layoutSetting}
      getNodeDefaults={(node: NodeModel): NodeModel => {
        let codes: Object = {
          Director: "rgb(0, 139,139)",
          Manager: "rgb(30, 30,113)",
          Lead: "rgb(0, 100,0)"
        };
        node.width = 70;
        node.height = 30;
        node.annotations = [
          { content: (node.data as EmployeeInfo).Name, style: { color: "white" } }
        ];
        node.style.fill = codes[(node.data as EmployeeInfo).Role];
        return node;
      }}
      getConnectorDefaults={(connector: ConnectorModel): ConnectorModel => {
        connector.type = "Orthogonal";
        connector.cornerRadius = 7;
        return connector;
      }}
    >
      <Inject services={[HierarchicalTree, DataBinding]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);


{% endraw %}