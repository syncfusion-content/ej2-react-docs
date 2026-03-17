{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    NodeModel,
    ConnectorModel,
    UndoRedo,
    Inject,
    IHistoryChangeArgs
} from "@syncfusion/ej2-react-diagrams";
let nodes: NodeModel[] = [{
  id: 'node1',
  width: 140,
  height: 50,
  offsetX: 300,
  offsetY: 50,
  annotations: [
    {
      content: 'Node1',
    },
  ],
},
{
  id: 'node2',
  width: 140,
  height: 50,
  offsetX: 300,
  offsetY: 140,
  annotations: [
    {
      content: 'Node2',
    },
  ],
}];
let connector: ConnectorModel[] = [
  {
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    type: 'Orthogonal',
  },
];
function App() {
  const historyChange = (args: IHistoryChangeArgs) => {
    //Triggers while interacting with diagram and performing undo-redo
    console.log(args);
  };
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      connectors={connector}
      historyChange={historyChange}
    >
      <Inject services={[UndoRedo]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}