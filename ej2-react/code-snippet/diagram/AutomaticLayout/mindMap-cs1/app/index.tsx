{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, ConnectorModel, DataBinding, NodeModel, MindMap } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";

//Initializes data source
let data: object[] = [
  { id: 1, Label: "StackPanel" },
  { id: 2, Label: "Label", parentId: 1 },
  { id: 3, Label: "ListBox", parentId: 1 },
  { id: 4, Label: "StackPanel", parentId: 2 },
  { id: 5, Label: "Border", parentId: 2 },
  { id: 6, Label: "Border", parentId: 4 },
  { id: 7, Label: "Button", parentId: 4 },
  { id: 8, Label: "ContentPresenter", parentId: 5 },
  { id: 9, Label: "Text Block", parentId: 5 },
];
let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

export default function App() {
  return (
    <DiagramComponent
      id="container"
      width={"100%"}
      height={"550px"}

      //Uses layout to auto-arrange nodes on the diagram page
      layout={{
        //Sets layout type
        type: "MindMap",
        orientation: "Horizontal"
      }}

      //Configures data source for diagram
      dataSourceSettings={{
        id: "id",
        parentId: "parentId",
        dataManager: items,
        root: String(1),
      }}

      //Sets the default properties for nodes
      getNodeDefaults={(node: NodeModel) => {
        node.annotations = [{ content: (node.data as { Label: 'string' }).Label }];
        node.width = 100; node.height = 40;
        return node;
      }}

      //Sets the default properties for connectors
      getConnectorDefaults={(connector: ConnectorModel) => {
        connector.type = "Orthogonal";
        return connector;
      }}
    >

      {/* Inject necessary services for the diagram */}
      <Inject services={[DataBinding, MindMap]} />
    </DiagramComponent>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

{% endraw %}