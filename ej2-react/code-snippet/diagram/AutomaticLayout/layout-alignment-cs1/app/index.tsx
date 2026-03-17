{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, HierarchicalTree, DataBinding, ConnectorModel,
  NodeModel, HorizontalAlignment, VerticalAlignment } from '@syncfusion/ej2-react-diagrams';
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
  let diagramInstance: DiagramComponent;
  let horizontalInstance: HTMLSelectElement;
  let verticalInstance: HTMLSelectElement;

  // Function to handle Horizontal Alignment
  function horizontalAlign() {
    diagramInstance.layout.horizontalAlignment = horizontalInstance.value as HorizontalAlignment;
    diagramInstance.dataBind();
  }

  // Function to handle Vertical Alignment
  function verticalAlign() {
    diagramInstance.layout.verticalAlignment = verticalInstance.value as VerticalAlignment;
    diagramInstance.dataBind();
  }

  return (
    <div>
      <label htmlFor="horizontal">Horizontal : </label>
      <select name="HorizontalAlignment" id="horizontalAlign" onChange={horizontalAlign}
        ref={(horizontal: any) => (horizontalInstance = horizontal)}
      >
        <option value="Left">Left</option>
        <option value="Center">Center</option>
        <option value="Right">Right</option>
      </select>
      <label htmlFor="vertical">Vertical : </label>

      <select name="verticalAlignment" id="verticalAlign" onChange={verticalAlign}
        ref={(vertical: any) => (verticalInstance = vertical)}
      >
        <option value="Top">Top</option>
        <option value="Center">Center</option>
        <option value="Bottom">Bottom</option>
      </select>

      <DiagramComponent
        id="container"
        width={'100%'}
        height={'550px'}
        ref={(diagram: any) => (diagramInstance = diagram)}

        //Uses layout to auto-arrange nodes on the diagram page
        layout={{
          //Sets layout type
          type: 'HierarchicalTree',
          //set layout alignment
          horizontalAlignment: 'Left',
          verticalAlignment: 'Top',
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