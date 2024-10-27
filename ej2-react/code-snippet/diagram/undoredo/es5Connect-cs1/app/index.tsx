import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    NodeModel,
    ConnectorModel,
    DiagramComponent,
    ConnectorConstraints,
    ConnectorEditing,
    Inject
} from "@syncfusion/ej2-react-diagrams";
let connector: ConnectorModel[] = [
  {
    id: 'connetor',
    type: 'Bezier',
    segments: [{ type: 'Bezier', point: { x: 150, y: 100 } }],
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 100 },
    annotations: [
      {
        content: 'Adjust control point or end point to autoScroll',
        alignment: 'After',
      },
    ],
    constraints:
      ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
  },
];
let nodes: NodeModel[] = [{
  id: 'node1',
  width: 100,
  height: 60,
  offsetX: 200,
  offsetY: 300,
  annotations: [
    { content: 'Drag or resize the node to activate autoscroll' },
  ],
}];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connector}
      rulerSettings={{ showRulers: true }}
      // set the autoScrollBorder
      scrollSettings = {
        {
          scrollLimit: 'Infinity',
          canAutoScroll: true,
          autoScrollBorder: {
            left: 100,
            right: 100,
            top: 100,
            bottom: 100
          }
        }
      }>
    <Inject services={[ConnectorEditing]}/>
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);