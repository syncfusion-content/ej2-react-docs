

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  DiagramComponent,
  NodeModel,
  ConnectorModel
} from "@syncfusion/ej2-react-diagrams";

export default function App() {
  const nodes: NodeModel[] = [
    {
      id: 'Start', width: 140, height: 50, offsetX: 300, offsetY: 50,
      annotations: [{
        id: 'label1',
        content: 'Start'
      }],
      shape: { type: 'Flow', shape: 'Terminator' }
    },
    {
      id: 'Init', width: 140, height: 50, offsetX: 300, offsetY: 140,
      shape: { type: 'Flow', shape: 'Process' },
      annotations: [{ content: 'var i = 0;' }]
    }
  ];
  const connectors: ConnectorModel[] = [
    {
      id: "connector1",
      sourceID: "Start",
      targetID: "Init"
    }
  ];
  return (
    <DiagramComponent
      id="container"
      width={"100%"}
      height={"350px"}
      nodes={nodes}
      connectors={connectors}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

