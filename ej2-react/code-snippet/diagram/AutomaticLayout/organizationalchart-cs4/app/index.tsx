{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { DiagramComponent, Inject, ConnectorModel, DataBinding, NodeModel, HierarchicalTree, SubTreeAlignments, TreeInfo, DecoratorModel } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";

//Initializes data source
let data: object[] = [
  { Id: 1, Role: 'General Manager' },
  { Id: 2, Role: 'Assistant Manager', Team: 1 },
  { Id: 3, Role: 'Human Resource Manager', Team: 1 },
  { Id: 4, Role: 'Design Manager', Team: 1 },
  { Id: 5, Role: 'Operation Manager', Team: 1 },
  { Id: 6, Role: 'Marketing Manager', Team: 1 },
];
let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

export default function App() {
  let diagramInstance: DiagramComponent;
  let alignmentInstance: HTMLSelectElement;

  function onAlignmentChange() {
    const args = alignmentInstance.value;
    diagramInstance.layout.getLayoutInfo = (node: Node, options: TreeInfo) => {
      if (!options.hasSubTree) {
        options.type = (args as SubTreeAlignments);
        options.orientation = 'Vertical';
      }
    };
  };

  return (
    <div>
      <label htmlFor="alignment">Alignment: </label>
      <select name="alignment" id="alignment" onChange={onAlignmentChange}
        ref={(alignment: any) => (alignmentInstance = alignment)}
      >
        <option value="Left">Left</option>
        <option value="Right">Right</option>
        <option value="Alternate">Alternate</option>
      </select>

      <DiagramComponent
        id="container"
        width={"100%"}
        height={"550px"}
        ref={(diagram: any) => (diagramInstance = diagram)}
        snapSettings={{ constraints: 0 }}

        //Uses layout to auto-arrange nodes on the diagram page
        layout={{
          //Sets layout type
          type: 'OrganizationalChart',
          // define the getLayoutInfo
          getLayoutInfo: (node: Node, options: TreeInfo) => {
            if (!options.hasSubTree) {
              options.type = 'Left';
              options.orientation = 'Vertical';
            }
          }
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
          node.width = 150;
          node.height = 50;
          return node;
        }}

        //Sets the default properties for connectors
        getConnectorDefaults={(connector: ConnectorModel) => {
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
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

{% endraw %}