

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, IPrintOptions, NodeModel, PrintAndExport, SnapConstraints } from "@syncfusion/ej2-react-diagrams";

export default function App() {
  let diagramInstance: DiagramComponent;

  // Initialize nodes for the diagram
  let nodes: NodeModel[] = [
    {
      id: 'node1',
      width: 100,
      height: 50,
      offsetX: 100,
      offsetY: 100,
      style: { strokeColor: '#868686', fill: '#d5f5d5' },
      annotations: [{ content: 'Node 1' }],
    },
    {
      id: 'node2',
      width: 100,
      height: 75,
      offsetX: 100,
      offsetY: 225,
      shape: { type: 'Basic', shape: 'Diamond' },
      style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
      annotations: [{ content: 'Node 2' }],
    },
    {
      id: 'node3',
      width: 135,
      height: 50,
      offsetX: 400,
      offsetY: 425,
      style: { strokeColor: '#a8a8a8', fill: '#faebee' },
      annotations: [{ content: 'Node 3' }],
    },
    {
      id: 'node4',
      width: 125,
      height: 50,
      offsetX: 400,
      offsetY: 525,
      shape: { type: 'Basic', shape: 'Ellipse' },
      style: { strokeColor: '#a8a8a8', fill: '#fef0db' },
      annotations: [{ content: 'Node 4' }],
    },
  ];

  //Function to print the diagram objects.
  function handlePrint() {
    let printOptions: IPrintOptions = {}
    printOptions.pageHeight = 700;
    printOptions.pageWidth = 1000;
    diagramInstance.print(printOptions);
  };

  return (
    // Initialize Diagram component
    <div>
      <button id="print" onClick={handlePrint}>Print Diagram</button>
      <DiagramComponent
        id="container"
        ref={(diagram: any) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
        nodes={nodes}
        snapSettings={{ constraints: SnapConstraints.None }}
      >
        <Inject services={[PrintAndExport]} />
      </DiagramComponent>
    </div>
  );
};

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

