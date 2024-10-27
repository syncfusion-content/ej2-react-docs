import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Connector, Node, NodeModel, IClickEventArgs,ConnectorModel,} from "@syncfusion/ej2-react-diagrams";
let nodes: NodeModel[] = [
  {
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [
      {
        content: 'Click node',
      },
    ],

  }
]
let connectors: ConnectorModel[] = [{
  // Name of the connector
  id: "connector1",
  // Sets source and target points
  sourceID: 'Start',
  targetPoint: { x: 300, y: 200 },
  annotations: [
    {
      content: 'Click Connector',
    },
  ],
}];
function App() {
  return (<DiagramComponent id="container" width={'100%'} height={'600px'} connectors={connectors} nodes={nodes}
    click={(args: IClickEventArgs) => {
      let element = 'Diagram';
      if (args.actualObject instanceof Node) {
        element = 'Node';
      } else if (args.actualObject instanceof Connector) {
        element = 'Connector';
      }
      alert(element + ' Clicked');
    }}
  />);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
