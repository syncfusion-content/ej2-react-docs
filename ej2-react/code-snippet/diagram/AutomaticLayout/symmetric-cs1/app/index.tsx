{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { DiagramComponent, Inject, SymmetricLayout, ConnectorModel, NodeModel, BasicShapeModel } from '@syncfusion/ej2-react-diagrams';


//Initialize nodes 
let nodes: NodeModel[] = [];

//Initializes connectors
let connectors: ConnectorModel[] = [];

// creating the connection between the layout nodes and connectors.
function connectNodes(parentNode: NodeModel | any, childNode: NodeModel): ConnectorModel {
  const connector: ConnectorModel = {
    id: parentNode.id + childNode.id,
    sourceID: parentNode.id,
    targetID: childNode.id,
    targetDecorator: { shape: 'None' },
  };
  return connector;
}

// creating the layout nodes as rectangle in shape.
function getRectangle(name: string): NodeModel {
  const shape: BasicShapeModel = {
    type: 'Basic',
    shape: 'Ellipse',
  };
  const node: NodeModel = {
    id: name,
    height: 25,
    width: 25,
    style: { fill: '#ff6329' },
    shape: shape,
  };
  return node;
}

// creating the symmetrical layout child elements hierarchy.
function populateNodes() {
  const parentRect: NodeModel = getRectangle('p');
  nodes.push(parentRect);
  for (let i = 0; i < 2; i++) {
    const childRect_i: NodeModel = getRectangle('c' + i);
    nodes.push(childRect_i);
    for (let j = 0; j < 2; j++) {
      const childRect_j: NodeModel = getRectangle('c' + i + j);
      nodes.push(childRect_j);
      for (let k = 0; k < 6; k++) {
        const childRect_k: NodeModel = getRectangle('c' + i + j + k);
        nodes.push(childRect_k);
        connectors.push(connectNodes(childRect_j, childRect_k));
      }
      connectors.push(connectNodes(childRect_i, childRect_j));
    }
    connectors.push(connectNodes(parentRect, childRect_i));
  }
  return nodes;
}

//sets the layout child elements
populateNodes();

export default function App() {

  return (
    <div>
      <DiagramComponent
        id="container"
        width={'80%'}
        height={'550px'}
        nodes={nodes}
        connectors={connectors}

        //Uses layout to auto-arrange nodes on the diagram page
        layout={{
          //Sets layout type
          type: 'SymmetricalLayout',
          springLength: 80,
          springFactor: 0.8,
          maxIteration: 500,
          margin: { left: 20, top: 20 },
        }}
      >

        {/* Inject necessary services for the diagram */}
        <Inject services={[SymmetricLayout]} />
      </DiagramComponent>

    </div>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById('diagram') as HTMLElement);
root.render(<App />);

{% endraw %}