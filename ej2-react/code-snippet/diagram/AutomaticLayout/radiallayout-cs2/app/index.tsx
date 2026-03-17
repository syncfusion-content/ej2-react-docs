{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, ConnectorModel, DataBinding, NodeModel, RadialTree, DecoratorModel } from "@syncfusion/ej2-react-diagrams";


//Initializes Nodes for diagram
let nodes: NodeModel[] = [
  { id: 'Maria Anders' },
  { id: 'Ana Trujillo' },
  { id: 'Lino Rodri' },
  { id: 'Philip Cramer' },
  { id: 'Pedro Afonso' },
  { id: 'Paul Henriot' },
  { id: 'Laura Callahan' },
  { id: 'Anto Moreno' },
  { id: 'Elizabeth Roel' },
  { id: 'Aria Cruz' },
  { id: 'Eduardo Roel' },
  { id: 'Howard Snyd' },
  { id: 'Daniel Tonini' },
  { id: 'Nardo Batista' },
  { id: 'Michael Holz' },
  { id: 'Kloss Perrier' },
  { id: 'Liz Nixon' },
  { id: 'Paula Parente' },
  { id: 'Matti Kenna' },
];

//Initializes Connectors for diagram
let connectors: ConnectorModel[] = [
  {
    id: 'Maria Anders-Ana Trujillo',
    sourceID: 'Maria Anders',
    targetID: 'Ana Trujillo',
  },
  {
    id: 'Maria Anders-Lino Rodri',
    sourceID: 'Maria Anders',
    targetID: 'Lino Rodri',
  },
  {
    id: 'Maria Anders-Philip Cramer',
    sourceID: 'Maria Anders',
    targetID: 'Philip Cramer',
  },
  {
    id: 'Maria Anders-Pedro Afonso',
    sourceID: 'Maria Anders',
    targetID: 'Pedro Afonso',
  },
  {
    id: 'Maria Anders-Paul Henriot',
    sourceID: 'Maria Anders',
    targetID: 'Paul Henriot',
  },
  {
    id: 'Maria Anders-Laura Callahan',
    sourceID: 'Maria Anders',
    targetID: 'Laura Callahan',
  },
  {
    id: 'Ana Trujillo-Anto Moreno',
    sourceID: 'Ana Trujillo',
    targetID: 'Anto Moreno',
  },
  {
    id: 'Ana Trujillo-Elizabeth Roel',
    sourceID: 'Ana Trujillo',
    targetID: 'Elizabeth Roel',
  },
  {
    id: 'Laura Callahan-Aria Cruz',
    sourceID: 'Laura Callahan',
    targetID: 'Aria Cruz',
  },
  {
    id: 'Laura Callahan-Eduardo Roel',
    sourceID: 'Laura Callahan',
    targetID: 'Eduardo Roel',
  },
  {
    id: 'Lino Rodri-Howard Snyd',
    sourceID: 'Lino Rodri',
    targetID: 'Howard Snyd',
  },
  {
    id: 'Lino Rodri-Daniel Tonini',
    sourceID: 'Lino Rodri',
    targetID: 'Daniel Tonini',
  },
  {
    id: 'Philip Cramer-Nardo Batista',
    sourceID: 'Philip Cramer',
    targetID: 'Nardo Batista',
  },
  {
    id: 'Philip Cramer-Michael Holz',
    sourceID: 'Philip Cramer',
    targetID: 'Michael Holz',
  },
  {
    id: 'Pedro Afonso-Kloss Perrier',
    sourceID: 'Pedro Afonso',
    targetID: 'Kloss Perrier',
  },
  {
    id: 'Pedro Afonso-Liz Nixon',
    sourceID: 'Pedro Afonso',
    targetID: 'Liz Nixon',
  },
  {
    id: 'Paul Henriot-Paula Parente',
    sourceID: 'Paul Henriot',
    targetID: 'Paula Parente',
  },
  {
    id: 'Paul Henriot-Matti Kenna',
    sourceID: 'Paul Henriot',
    targetID: 'Matti Kenna',
  }
];

export default function App() {
  return (
    <DiagramComponent
      id="container"
      width={"100%"}
      height={"550px"}
      nodes={nodes}
      connectors={connectors}
      snapSettings={{ constraints: 0 }}
      
      //Uses layout to auto-arrange nodes on the diagram page
      layout={{
        //set layout type
        type: 'RadialTree',
        root: 'parent'
      }}

      //Sets the default properties for nodes
      getNodeDefaults={(node: NodeModel) => {
        node.height = 20;
        node.width = 20;
        return node;
      }}

      //Sets the default properties for connectors
      getConnectorDefaults={(connector: ConnectorModel) => {
        (connector.targetDecorator as DecoratorModel).shape = 'None';
        connector.type = 'Straight';
        return connector;
      }}
    >

      {/* Inject necessary services for the diagram */}
      <Inject services={[DataBinding, RadialTree]} />
    </DiagramComponent>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

{% endraw %}