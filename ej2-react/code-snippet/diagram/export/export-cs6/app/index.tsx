
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { DiagramComponent, Inject, NodeModel, PrintAndExport } from "@syncfusion/ej2-react-diagrams";

export default function App() {
  let diagramInstance: DiagramComponent;

  // Initialize Nodes for the diagram
  let nodes: NodeModel[] = [
    {
      id: 'node1',
      width: 100,
      height: 100,
      annotations: [{ content: 'Node 1' }],
      offsetX: 200,
      offsetY: 100,
      style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
      },
    }
  ];

  //Function to print the diagram objects.
  function handleExport() {
    /**
     * parameter (Optional) -  defines the collection of style files to be considered while exporting.
     */
    let content = diagramInstance.getDiagramContent();
    console.log(content);
  };

  return (
    // Initialize Diagram component
    <div>
      <button id="export" onClick={handleExport}>Export Diagram</button>
      <DiagramComponent
        id="container"
        ref={(diagram: any) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
        nodes={nodes}
      >
        <Inject services={[PrintAndExport]} />
      </DiagramComponent>
    </div>
  );
};

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);
