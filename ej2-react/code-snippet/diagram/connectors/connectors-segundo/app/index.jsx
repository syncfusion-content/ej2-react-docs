import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, ConnectorConstraints, ConnectorEditing, UndoRedo } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(ConnectorEditing, UndoRedo);

let diagramInstance;
let nodes = [
  {
    id: 'sourcenode',
    width: 150,
    height: 50,
    offsetX: 350,
    offsetY: 50,
    annotations: [
      {
        content: 'Node1',
      },
    ],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
  },
  {
    id: 'targetnode',
    width: 150,
    height: 50,
    offsetX: 200,
    offsetY: 250,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    annotations: [
      {
        content: 'Node2',
      },
    ],
  },
];
let connectors = [{
  id: 'connector1',
  sourceID: 'sourcenode',
  targetID: 'targetnode',
  type: 'Orthogonal',
  segments: [
    {
      type: 'Orthogonal',
      direction: 'Left',
      length: 100,
    },
    {
      type: 'Orthogonal',
      direction: 'Bottom',
      length: 100
    },
    {
      type: 'Orthogonal',
      direction: 'Right',
      length: 100
    },
    {
      type: 'Orthogonal',
      direction: 'Bottom',
      length: 50
    }
  ],
  constraints: ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
}];
function App() {
  const undo = () => {
    diagramInstance.undo();
  }
  const redo = () => {
    diagramInstance.redo()
  }
  return (
    <div>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
      <DiagramComponent id="container" width={'100%'} connectors={connectors} nodes={nodes} height={'600px'}
        ref={(diagram) => (diagramInstance = diagram)}
      ></DiagramComponent>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);