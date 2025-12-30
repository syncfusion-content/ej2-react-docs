

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, HierarchicalTree, DataBinding, ConnectorModel,
  NodeModel, SelectorConstraints, DecoratorModel, TreeInfo } from '@syncfusion/ej2-react-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';

//Initializes data source
let data: object[] = [
  {
    'Id': 'parent1',
    'Name': 'Maria ',
    'Designation': 'Managing Director',
    'RatingColor': '#C34444'
  },
  {
    'Id': 'parent',
    'Name': ' sam',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent1',
    'RatingColor': '#C34444'
  },
  {
    'Id': 'parent3',
    'Name': ' sam geo',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent1',
    'RatingColor': '#C34444'
  },
  {
    'Id': '80',
    'Name': ' david',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent3',
    'RatingColor': '#C34444'
  },
  {
    'Id': '82',
    'Name': ' pirlo',
    'Designation': 'Managing Director',
    'ReportingPerson': 'parent',
    'RatingColor': '#C34444'
  }
];

let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

export default function App() {

  return (
    <div>
      <DiagramComponent
        id="container"
        width={'100%'}
        height={'550px'}

        selectedItems={{ constraints: ~SelectorConstraints.ResizeAll }}
        snapSettings={{ constraints: 0 }}

        //Uses layout to auto-arrange nodes on the diagram page
        layout={{
          //Sets layout type
          type: 'OrganizationalChart',

          // define the getLayoutInfo
          getLayoutInfo: (tree: TreeInfo | any) => {
            if (!tree.hasSubTree) {
              tree.orientation = 'vertical';
              tree.type = 'alternate';
            }
          }
        }}

        //Configures data source for diagram
        dataSourceSettings={{
          id: 'Id',
          parentId: 'ReportingPerson',
          dataManager: items,
        }}

        //Sets the default properties for nodes
        getNodeDefaults={(node: NodeModel): NodeModel => {
          node.width = 50; node.height = 50;
          node.expandIcon = {
            height: 15,
            width: 15,
            shape: "Plus",
            fill: 'lightgray',
            offset: { x: .5, y: .85 }
          }
          node.collapseIcon = {
            height: 15,
            width: 15,
            shape: "Minus",
            offset: { x: .5, y: .85 },
          }
          return node;
        }}

        //Sets the default properties for connectors
        getConnectorDefaults={(connector: ConnectorModel): ConnectorModel => {
          connector.type = 'Orthogonal';
          (connector.targetDecorator as DecoratorModel).shape = 'None';
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

