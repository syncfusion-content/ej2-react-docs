

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, PrintAndExport } from "@syncfusion/ej2-react-diagrams";

export default function App() {
  let diagramInstance;
  let regionInstance;

  // Initialize nodes for the diagram
  let nodes = [
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

  // Function to handle the print action
  function handlePrint() {
    let regionValue = regionInstance.value;
    let printOptions = { region: regionValue };
    diagramInstance.print(printOptions);
  };

  return (
    // Initialize Diagram component
    <div>
      <select id="region" ref={(region) => (regionInstance = region)}>
        <option value="Content">Content</option>
        <option value="PageSettings">PageSettings</option>
      </select>
      <button id="print" onClick={handlePrint}>Print Diagram</button>
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
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
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);

