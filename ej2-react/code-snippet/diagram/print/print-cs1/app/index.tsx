{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, PrintAndExport, NodeModel, DiagramRegions, IPrintOptions } from "@syncfusion/ej2-react-diagrams";

export default function App() {
  let diagramInstance: DiagramComponent;
  let regionInstance: HTMLSelectElement;

  // Initialize nodes for the diagram
  let nodes: NodeModel[] = [
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
      annotations: [{ content: 'Node 1' }],
    },
    {
      id: 'node2',
      width: 100,
      height: 100,
      offsetX: 300,
      offsetY: 130,
      annotations: [{ content: 'Node 2' }],
    },
  ];


  function handlePrint() {
    let printOptions: IPrintOptions = {};
    let regionValue = (regionInstance.value as DiagramRegions);
    printOptions.region = regionValue;
    diagramInstance.print(printOptions);
  };

  return (
    // Initialize Diagram component
    <div>
      <select id="region" ref={(region: any) => (regionInstance = region)}>
        <option value="Content">Content</option>
        <option value="PageSettings">PageSettings</option>
      </select>
      <button id="print" onClick={handlePrint}>Print Diagram</button>
      <DiagramComponent
        id="container"
        ref={(diagram: any) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
        nodes={nodes}
        pageSettings={{ width: 200, height: 200 }}
      >
        <Inject services={[PrintAndExport]} />
      </DiagramComponent>
    </div>
  );
};

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

{% endraw %}