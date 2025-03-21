{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, HierarchicalTree, DataBinding, ConnectorModel, NodeModel } from '@syncfusion/ej2-react-diagrams';
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

  // Function to handle Horizontal Spacing
  function horizontalSpacing() {
    let value = Number(horizontalInstance.value);
    if (value < 20) {
      value = 20;
    }
    if (value > 100) {
      value = 100;
    }
    diagramInstance.layout.horizontalSpacing = value;
    diagramInstance.dataBind();
  }

  // Function to handle Vertical Spacing
  function verticalSpacing() {
    let value = Number(verticalInstance.value);
    if (value < 20) {
      value = 20;
    }
    if (value > 100) {
      value = 100;
    }
    diagramInstance.layout.verticalSpacing = value;
    diagramInstance.dataBind();
  }

  return (
    <div>
      <label htmlFor="horizontal">Horizontal : </label>
      <input type="number" name="horizontal" id="horizontalSpacing"
        onChange={horizontalSpacing} ref={(horizontal: any) => (horizontalInstance = horizontal)} />
      <label htmlFor="vertical">Vertical : </label>
      <input type="number" name="vertical" id="verticalSpacing"
        onChange={verticalSpacing} ref={(vertical: any) => (verticalInstance = vertical)} />

      <DiagramComponent
        id="container"
        width={'100%'}
        height={'550px'}
        ref={(diagram: any) => (diagramInstance = diagram)}

        //Uses layout to auto-arrange nodes on the diagram page
        layout={{
          //Sets layout type
          type: 'HierarchicalTree',
          //set layout spacing
          horizontalSpacing: 30,
          verticalSpacing: 30,
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