import * as React from "react";
import * as ReactDOM from "react-dom";
import {DiagramComponent,  ConnectorModel, NodeModel, IConnectionChangeEventArgs
} from "@syncfusion/ej2-react-diagrams";
let nodes: NodeModel[] = [
  {
    id: 'node1',
    offsetX: 200,
    offsetY: 200,
    width: 120,
    height: 60,
    style: { fill: 'skyblue' },
  },
  {
    id: 'node2',
    offsetX: 500,
    offsetY: 200,
    width: 120,
    height: 60,
    style: { fill: 'skyblue' },
  },
];
let connectors: ConnectorModel[] = [
  {
    // Name of the connector
    id: 'connector1',
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
    sourceID: 'node1',
    targetID: 'node2',
  },
];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      connectors={connectors}
      nodes={nodes}
      connectionChange={
        (args: IConnectionChangeEventArgs) => {
          if (args.state === 'Changed') {
            console.log('connectionChange');
            //Customize
          }
        }
      }
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



