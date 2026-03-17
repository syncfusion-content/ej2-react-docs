{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Diagram,
  DiagramComponent,
  Inject,
  ConnectorModel,
  Node,
  NodeModel,
  Container,
  TextElement,
  StackPanel,
  ImageElement,
  DataBinding,
  RadialTree,
  TreeInfo,
  DiagramTools,
} from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";
//Initializes data source
let data: object = [
  {
    Id: 1,
    Name: "Ana Trujillo",
    Designation: "Project Manager",
    RatingColor: "#68C2DE",
  },
  {
    Id: 2,
    Name: "Lino Rodri",
    Designation: "Project Manager",
    RatingColor: "#68C2DE",
    ReportingPerson: 1,
  },
  {
    Id: 3,
    Name: "Philip Cramer",
    Designation: "Project Manager",
    RatingColor: "#68C2DE",
    ReportingPerson: 1,
  },
  {
    Id: 4,
    Name: "Pedro Afonso",
    Designation: "Project Manager",
    RatingColor: "#68C2DE",
    ReportingPerson: 1,
  },
  {
    Id: 5,
    Name: "Anto Moreno",
    Designation: "Project Lead",
    RatingColor: "#93B85A",
    ReportingPerson: 1,
  },
  {
    Id: 6,
    Name: "Elizabeth Roel",
    Designation: "Project Lead",
    RatingColor: "#93B85A",
    ReportingPerson: 1,
  },
  {
    Id: 7,
    Name: "Aria Cruz",
    Designation: "Project Lead",
    RatingColor: "#93B85A",
    ReportingPerson: 1,
  },
  {
    Id: 8,
    Name: "Eduardo Roel",
    Designation: "Project Lead",
    RatingColor: "#93B85A",
    ReportingPerson: 1,
  },
  {
    Id: 9,
    Name: "Howard Snyd",
    Designation: "Project Lead",
    RatingColor: "#68C2DE",
    ReportingPerson: 1,
  },
  {
    Id: 10,
    Name: "Daniel Tonini",
    Designation: "Project Lead",
    RatingColor: "#93B85A",
    ReportingPerson: 1,
  },
  {
    Id: 11,
    Name: "Nardo Batista",
    Designation: "Project Lead",
    RatingColor: "#68C2DE",
    ReportingPerson: 1,
  },
];
let items: DataManager = new DataManager(data as JSON[], new Query().take(5));

function App() {
  return (
    <DiagramComponent
      id="container"
      width={"100%"}
      height={"590px"}
      snapSettings={{
        constraints: 0,
      }}
      //Uses layout to auto-arrange nodes on the diagram page
      layout={{
        //set the type as Radial tree
        type: "RadialTree",
        root: "parent",
      }}
      //Configures data source for diagram
      dataSourceSettings={{
        id: "Id",
        parentId: "ReportingPerson",
        dataManager: items,
      }}
      //Sets the default properties for nodes and connectors
      getNodeDefaults={(obj, diagram) => {
        obj.height = 15;
        obj.width = 15;
        obj.borderWidth = 1;
        obj.style = {
          fill: "#6BA5D7",
          strokeWidth: 2,
          strokeColor: "#6BA5D7",
        };
        return obj;
      }}
      getConnectorDefaults={(connector, diagram) => {
        connector.style = {
          strokeColor: "#6BA5D7",
          strokeWidth: 2,
        };
        connector.targetDecorator.style.fill = "#6BA5D7";
        connector.targetDecorator.style.strokeColor = "#6BA5D7";
        connector.targetDecorator.shape = "None";
        connector.type = "Straight";
        return connector;
      }}
    >
      <Inject services={[DataBinding, RadialTree]} />
    </DiagramComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);


{% endraw %}