{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, HierarchicalTree, DataBinding,
  ConnectorModel, NodeModel } from '@syncfusion/ej2-react-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

//Initializes data source
let data: object[] = [
  { Name: 'Steve-Ceo' },
  { Name: 'Kevin-Manager', ReportingPerson: 'Steve-Ceo' },
  { Name: 'Peter-Manager', ReportingPerson: 'Kevin-Manager' },
  { Name: 'John- Manager', ReportingPerson: 'Peter-Manager' },
  { Name: 'Mary-CSE ', ReportingPerson: 'Peter-Manager' },
];
let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

export default function App() {

  return (
    <div>
      <DiagramComponent
        id="container"
        width={'100%'}
        height={'550px'}

        //Uses layout to auto-arrange nodes on the diagram page
        layout={{
          //Sets layout type
          type: 'HierarchicalTree',
          //set layout margin
          margin: { left: 100, top: 100 },
        }}

        //Configures data source for diagram
        dataSourceSettings={{
          id: 'Name',
          parentId: 'ReportingPerson',
          dataManager: items,
        }}

        //Sets the default properties for nodes
        getNodeDefaults={(node: NodeModel): NodeModel => {
          node.annotations = [{ content: (node.data as { Name: 'string' }).Name }];
          node.width = 100;
          node.height = 40;
          return node;
        }}

        //Sets the default properties for connectors
        getConnectorDefaults={(connector: ConnectorModel): ConnectorModel => {
          connector.type = 'Orthogonal';
          return connector;
        }}
      >

        {/* Inject necessary services for the diagram */}
        <Inject services={[DataBinding, HierarchicalTree]} />
      </DiagramComponent>

    </div>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById('diagram') as HTMLElement);
root.render(<App />);

{% endraw %}