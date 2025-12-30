


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Diagram,
  DiagramComponent,
  Inject,
  ConnectorModel,
  NodeModel,
  DiagramConstraints,
  ComplexHierarchicalTree,
  ConnectionPointOrigin,
  LineDistribution,
  DataBinding,
  Rect,
} from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";
let diagramInstance: Diagram;
//Initializes data source
let data: object[] = [
  { Name: "node11" },
  { Name: "node12", ReportingPerson: ["node114"] },
  { Name: "node13", ReportingPerson: ["node12"] },
  { Name: "node14", ReportingPerson: ["node12"] },
  { Name: "node15", ReportingPerson: ["node12"] },
  { Name: "node116", ReportingPerson: ["node22", "node12"] },
  { Name: "node16", ReportingPerson: [] },
  { Name: "node18", ReportingPerson: [] },
  { Name: "node21" },
  { Name: "node22", ReportingPerson: ["node114"] },
  { Name: "node23", ReportingPerson: ["node22"] },
  { Name: "node24", ReportingPerson: ["node22"] },
  { Name: "node25", ReportingPerson: ["node22"] },
  { Name: "node26", ReportingPerson: [] },
  { Name: "node28", ReportingPerson: [] },
  { Name: "node31" },
  { Name: "node114", ReportingPerson: ["node11", "node21", "node31"] },
];

let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={"100%"}
      height={"590px"}
      snapSettings={{
        constraints: 0,
      }}
      created={(args) => {
        diagramInstance.fitToPage({ mode: "Width" });
      }}
      layout={{
        type: "ComplexHierarchicalTree",
        connectionPointOrigin: ConnectionPointOrigin.DifferentPoint,
        horizontalSpacing: 40,
        verticalSpacing: 40,
        horizontalAlignment: "Left",
        verticalAlignment: "Top",
        margin: { left: 0, right: 0, top: 0, bottom: 0 },
        orientation: "TopToBottom",
      }}
      dataSourceSettings={{
        id: "Name",
        parentId: "ReportingPerson",
        dataManager: items,
      }}
      getNodeDefaults={(obj: Node) => {
        obj.width = 40;
        obj.height = 40;
        obj.shape = { type: "Basic", shape: "Rectangle" };
        obj.style = { fill: "#6BA5D7", strokeColor: "none", strokeWidth: 2 };
        obj.borderWidth = 1;
        obj.backgroundColor = "#6BA5D7";
        return obj;
      }}
      getConnectorDefaults={(connector: ConnectorModel, diagram: Diagram) => {
        connector.type = "Orthogonal";
        connector.cornerRadius = 7;
        connector.targetDecorator.height = 7;
        connector.targetDecorator.width = 7;
        connector.style = { strokeColor: "#6BA5D7", strokeWidth: 1 };
        connector.targetDecorator.style.fill = "#6BA5D7";
        connector.targetDecorator.style.strokeColor = "#6BA5D7";
        return connector;
      }}
    >
      <Inject
        services={[DataBinding, ComplexHierarchicalTree, LineDistribution]}
      />
    </DiagramComponent>
  );
}

// Initializes the diagram
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);


