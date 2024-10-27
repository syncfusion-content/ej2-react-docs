
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { DiagramComponent, Inject, Rect, IExportOptions, DiagramRegions, NodeModel, PrintAndExport, SnapConstraints } from "@syncfusion/ej2-react-diagrams";

export default function App() {
  let diagramInstance: DiagramComponent;
  let regionInstance: HTMLSelectElement;

  // Initialize Nodes for the diagram
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
  ];

  //Function to print the diagram objects.
  function handleExport() {
    let exportOptions: IExportOptions = {};
    let region = regionInstance.value;
    //Sets the region for the exported image.
    exportOptions.region = region as DiagramRegions;
    if (region === 'CustomBounds') {
      exportOptions.bounds = new Rect(0, 0, 300, 300);
    } else if (region === 'Content') {
      diagramInstance.pageSettings = {};
    } else {
      diagramInstance.pageSettings = { width: 500, height: 500 };
    }
    diagramInstance.exportDiagram(exportOptions);
  };


  return (
    // Initialize Diagram component
    <div>
      <label>Region </label>
      <select id="region" ref={(region: any) => (regionInstance = region)}>
        <option value="Content">Content</option>
        <option value="PageSettings">PageSettings</option>
        <option value="CustomBounds">CustomBounds</option>
      </select>
      <button id="export" onClick={handleExport}>Export Diagram</button>
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
