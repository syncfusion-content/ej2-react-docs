{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, ConnectorModel, DataBinding, NodeModel, HierarchicalTree } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";


//Initializes data source
let data: object[] = [
  {
    Id: 'parent',
    Role: 'Project Management',
  },
  {
    Id: 1,
    Role: 'R&D Team',
    Team: 'parent',
  },
  {
    Id: 3,
    Role: 'Philosophy',
    Team: '1',
  },
  {
    Id: 4,
    Role: 'Organization',
    Team: '1',
  },
  {
    Id: 5,
    Role: 'Technology',
    Team: '1',
  },
  {
    Id: 7,
    Role: 'Funding',
    Team: '1',
  },
  {
    Id: 8,
    Role: 'Resource Allocation',
    Team: '1',
  },
  {
    Id: 9,
    Role: 'Targeting',
    Team: '1',
  },
  {
    Id: 11,
    Role: 'Evaluation',
    Team: '1',
  },
  {
    Id: 156,
    Role: 'HR Team',
    Team: 'parent',
  },
  {
    Id: 13,
    Role: 'Recruitment',
    Team: '156',
  },
  {
    Id: 112,
    Role: 'Employee Relation',
    Team: '156',
  },
  {
    Id: 17,
    Role: 'Production & Sales Team',
    Team: 'parent',
  },
  {
    Id: 119,
    Role: 'Design',
    Team: '17',
  },
  {
    Id: 19,
    Role: 'Operation',
    Team: '17',
  },
  {
    Id: 20,
    Role: 'Support',
    Team: '17',
  },
  {
    Id: 21,
    Role: 'Quality Assurance',
    Team: '17',
  },
  {
    Id: 23,
    Role: 'Customer Interaction',
    Team: '17',
  },
  {
    Id: 24,
    Role: 'Support and Maintenance',
    Team: '17',
  },
  {
    Id: 25,
    Role: 'Task Coordination',
    Team: '17',
  }
];

let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

export default function App() {
  return (
    <DiagramComponent
      id="container"
      width={"100%"}
      height={"550px"}
      snapSettings={{ constraints: 0 }}

      //Uses layout to auto-arrange nodes on the diagram page
      layout={{
        //set layout type
        type: 'OrganizationalChart'
      }}

      //Configures data source for diagram
      dataSourceSettings={{
        id: 'Id',
        parentId: 'Team',
        dataSource: items
      }}

      //Sets the default properties for nodes
      getNodeDefaults={(node: NodeModel) => {
        node.annotations = [{ content: (node.data as { Role: 'string' }).Role }];
        node.width = 75;
        node.height = 40;
        return node;
      }}

      //Sets the default properties for connectors
      getConnectorDefaults={(connector: ConnectorModel) => {
        connector.type = 'Orthogonal';
        return connector;
      }}
    >

      {/* Inject necessary services for the diagram */}
      <Inject services={[DataBinding, HierarchicalTree]} />
    </DiagramComponent>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

{% endraw %}