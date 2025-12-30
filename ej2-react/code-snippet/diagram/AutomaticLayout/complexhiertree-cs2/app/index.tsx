

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, NodeModel, ConnectorModel, DataBinding,
  ComplexHierarchicalTree } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";


//Initializes data source
let data: object[] = [
  { "Name": "node11" },
  { "Name": "node12", "ReportingPerson": ["node114"] },
  { "Name": "node13", "ReportingPerson": ["node12"] },
  { "Name": "node14", "ReportingPerson": ["node12"] },
  { "Name": "node15", "ReportingPerson": ["node12"] },
  { "Name": "node16", "ReportingPerson": [] },
  { "Name": "node17", "ReportingPerson": ["node13", "node14", "node15"] },
  { "Name": "node18", "ReportingPerson": [] },
  { "Name": "node19", "ReportingPerson": ["node16", "node17", "node18"] },
  { "Name": "node110", "ReportingPerson": ["node16", "node17", "node18"] },
  { "Name": "node111", "ReportingPerson": ["node16", "node17", "node18", "node116"] },
  { "Name": "node21" },
  { "Name": "node22", "ReportingPerson": ["node114"] },
  { "Name": "node23", "ReportingPerson": ["node22"] },
  { "Name": "node24", "ReportingPerson": ["node22"] },
  { "Name": "node25", "ReportingPerson": ["node22"] },
  { "Name": "node26", "ReportingPerson": [] },
  { "Name": "node27", "ReportingPerson": ["node23", "node24", "node25"] },
  { "Name": "node28", "ReportingPerson": [] },
  { "Name": "node29", "ReportingPerson": ["node26", "node27", "node28", "node116"] },
  { "Name": "node210", "ReportingPerson": ["node26", "node27", "node28"] },
  { "Name": "node211", "ReportingPerson": ["node26", "node27", "node28"] },
  { "Name": "node31" },
  { "Name": "node114", "ReportingPerson": ["node11", "node21", "node31"] },
  { "Name": "node116", "ReportingPerson": ["node12", "node22"], }
];

let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

export default function App() {

  return (
    <div>
      <DiagramComponent
        id="container"
        width={"100%"}
        height={"700px"}

        //Uses layout to auto-arrange nodes on the diagram page
        layout={{
          //Sets layout type
          type: 'ComplexHierarchicalTree'
        }}

        //Configures data source for diagram
        dataSourceSettings={{
          id: 'Name',
          parentId: 'ReportingPerson',
          dataSource: items
        }}

        //Sets the default properties for nodes
        getNodeDefaults={(node: NodeModel) => {
          node.width = 70; node.height = 70;
          return node;
        }}

        //Sets the default properties for connectors
        getConnectorDefaults={(connector: ConnectorModel) => {
          connector.type = 'Orthogonal';
          return connector;
        }}
      >

        {/* Inject necessary services for the diagram */}
        <Inject services={[DataBinding, ComplexHierarchicalTree]} />
      </DiagramComponent>
    </div>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

