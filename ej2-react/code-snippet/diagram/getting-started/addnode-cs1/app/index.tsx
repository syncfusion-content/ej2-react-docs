

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, NodeModel } from "@syncfusion/ej2-react-diagrams";

export default function App() {
  const nodes: NodeModel[] = [
    {
      id: 'Start', width: 140, height: 50, offsetX: 300, offsetY: 100,
            annotations: [{
              id: 'label1',
              content: 'Start'
            }],
    }
  ];
  return (
    <DiagramComponent
      id="container"
      width={"100%"}
      height={"350px"}
      nodes={nodes}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

