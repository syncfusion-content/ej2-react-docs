import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  DiagramComponent,
  PortVisibility,
  FlipDirection,
  NodeModel
} from '@syncfusion/ej2-react-diagrams';
// A node is created and stored in nodes array.
var nodes : NodeModel[] = [
  {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    ports: [
      {
        id: 'left',
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Visible,
      },
    ],
    annotations: [{ content: 'FlipMode as Label', offset: { x: 0, y: 0.8 }  }],
    // Flip the node in Horizontal Direction
    flip: FlipDirection.Horizontal,
    //FlipMode as Label
    flipMode: 'Label',
    shape: {
      type: 'Basic',
      shape: 'RightTriangle',
    },
    style: {
      fill: '#6BA5D7',
    },
  },
  {
    id: 'node2',
    // Position of the node
    offsetX: 400,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [{ content: 'FlipMode as Port', offset: { x: 0, y: 0.8 }  }],
    // Flip the node in Horizontal Direction
    flip: FlipDirection.Horizontal,
    ports: [
      {
        id: 'left',
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Visible,
      },
    ],
    //FlipMode as Port
    flipMode: 'Port',
    shape: {
      type: 'Basic',
      shape: 'RightTriangle',
    },
    style: {
      fill: '#6BA5D7',
    },
  },
  {
    id: 'node3',
    // Position of the node
    offsetX: 100,
    offsetY: 300,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [{ content: 'FlipMode as All', offset: { x: 0, y: 0.8 }  }],
    // Flip the node in Horizontal Direction
    flip: FlipDirection.Horizontal,
    ports: [
      {
        id: 'left',
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Visible,
      },
    ],
    //FlipMode as All
    flipMode: 'All',
    shape: {
      type: 'Basic',
      shape: 'RightTriangle',
    },
    style: {
      fill: '#6BA5D7',
    },
  },
  {
    id: 'node4',
    // Position of the node
    offsetX: 400,
    offsetY: 300,
    // Size of the node
    width: 100,
    height: 100,
    annotations: [{ content: 'FlipMode as None', offset: { x: 0, y: 0.8 }  }],
    // Flip the node in Horizontal Direction
    flip: FlipDirection.Horizontal,
    ports: [
      {
        id: 'left',
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Visible,
      },
    ],
    //FlipMode as None
    flipMode: 'None',
    shape: {
      type: 'Basic',
      shape: 'RightTriangle',
    },
    style: {
      fill: '#6BA5D7',
    },
  },
];
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      created={() => {
        diagramInstance.select([diagramInstance.nodes[0]]);
      }}
    />
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);