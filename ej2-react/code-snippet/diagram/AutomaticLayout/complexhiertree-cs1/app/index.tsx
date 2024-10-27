
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { DiagramComponent, Inject, NodeModel, ConnectorModel, DataBinding,
  ComplexHierarchicalTree } from "@syncfusion/ej2-react-diagrams";


//Initialize nodes for diagram
let nodes: NodeModel[] = [
  { id: 'node1' },
  { id: 'node2' },
  { id: 'node3' },
  { id: 'node4' },
  { id: 'node5' },
  { id: 'node6' },
  { id: 'node7' },
];

//Initialize connectors for diagram
let connectors: ConnectorModel[] = [
  { id: 'node1-node4', sourceID: 'node1', targetID: 'node4' },
  { id: 'node2-node4', sourceID: 'node2', targetID: 'node4' },
  { id: 'node3-node4', sourceID: 'node3', targetID: 'node4' },
  { id: 'node4-node5', sourceID: 'node4', targetID: 'node5' },
  { id: 'node4-node6', sourceID: 'node4', targetID: 'node6' },
  { id: 'node5-node6', sourceID: 'node6', targetID: 'node7' },
];

export default function App() {

  return (
    <div>
      <DiagramComponent
        id="container"
        width={"100%"}
        height={"550px"}
        nodes={nodes}
        connectors={connectors}

        //Uses layout to auto-arrange nodes on the diagram page
        layout={{
          //Sets layout type
          type: 'ComplexHierarchicalTree',
        }}

        //Sets the default properties for nodes
        getNodeDefaults={(node: NodeModel) => {
          node.width = 70; node.height = 70;
          node.annotations = [{ content: node.id }];
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