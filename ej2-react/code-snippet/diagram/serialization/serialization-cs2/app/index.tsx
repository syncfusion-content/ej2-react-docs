
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { DiagramComponent, Inject, FlowchartLayout, ConnectorModel, NodeModel } from "@syncfusion/ej2-react-diagrams";

export default function App() {
  let diagramInstance: DiagramComponent;

  // Mermaid syntax for the flowchart data
  let mermaidFlowchartData: string = `flowchart TD
        A[Start] --> B(Process)
        B -.- C{Decision}
        C --Yes--> D[Plan 1]
        C ==>|No| E[Plan 2]
        style A fill:#90EE90,stroke:#333,stroke-width:2px;
        style B fill:#4682B4,stroke:#333,stroke-width:2px;
        style C fill:#FFD700,stroke:#333,stroke-width:2px;
        style D fill:#FF6347,stroke:#333,stroke-width:2px;
        style E fill:#FF6347,stroke:#333,stroke-width:2px;`;

  // Function to set default properties for nodes
  function getNodeDefaults(node: NodeModel | any): NodeModel {
    node.width = 120;
    node.height = 50;
    if (node.shape.shape === 'Decision') {
      node.height = 80;
    }
    node.annotations[0].style.bold = true;
    return node;
  };

  // Function to set default properties for connectors
  function getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  };

  // Function to load the Mermaid flowchart data into the diagram
  function loadMermaidFlowchart(): void {
    diagramInstance.loadDiagramFromMermaid(mermaidFlowchartData);
  };

  return (
    // Initialize Diagram component
    <div>
      <button onClick={loadMermaidFlowchart} id="loadMermaidFlowchart">Load Mermaid Flowchart</button>
      <DiagramComponent
        id="container"
        ref={(diagram: any) => (diagramInstance = diagram)}
        width={"100%"}
        height={"600px"}
        layout={{ type: 'Flowchart' }}
        getNodeDefaults={getNodeDefaults}
        getConnectorDefaults={getConnectorDefaults}
      >
        <Inject services={[FlowchartLayout]} />
      </DiagramComponent>
    </div>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);
