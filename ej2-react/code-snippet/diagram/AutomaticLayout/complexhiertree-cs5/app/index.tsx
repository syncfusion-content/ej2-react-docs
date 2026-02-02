{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, NodeModel, ConnectorModel, DataBinding, ComplexHierarchicalTree, LineDistribution } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";


//Initializes data source
let data: object[] = [
  { Name: 'node11' },
  { Name: 'node12', ReportingPerson: ['node114'] },
  { Name: 'node13', ReportingPerson: ['node12'] },
  { Name: 'node14', ReportingPerson: ['node12'] },
  { Name: 'node15', ReportingPerson: ['node12'] },
  { Name: 'node16', ReportingPerson: ['node12'] },
  { Name: 'node116', ReportingPerson: ['node22', 'node12', 'node114'] },
  { Name: 'node21' },
  { Name: 'node22', ReportingPerson: ['node114'] },
  { Name: 'node222', ReportingPerson: ['node114'] },
  { Name: 'node2222', ReportingPerson: ['node114'] },
  { Name: 'node23', ReportingPerson: ['node22'] },
  { Name: 'node31' },
  { Name: 'node114', ReportingPerson: ['node11', 'node21', 'node31'] },
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
          type: 'ComplexHierarchicalTree',
          enableRouting: true
        }}

        //Configures data source for diagram
        dataSourceSettings={{
          id: 'Name',
          parentId: 'ReportingPerson',
          dataSource: items
        }}

        //Sets the default properties for nodes
        getNodeDefaults={(node: NodeModel) => {
          node.width = 40; node.height = 40;
          return node;
        }}

        //Sets the default properties for connectors
        getConnectorDefaults={(connector: ConnectorModel) => {
          connector.type = 'Orthogonal';
          connector.cornerRadius = 7;
          return connector;
        }}
      >

        {/* Inject necessary services for the diagram */}
        <Inject services={[DataBinding, ComplexHierarchicalTree, LineDistribution ]} />
      </DiagramComponent>
    </div>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

{% endraw %}