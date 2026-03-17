{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";

export default function App() {
  let diagramInstance: DiagramComponent;
  const mermaidData: string = `
 sequenceDiagram
    participant User
    participant Controller
    participant Service
    participant Database

    User->>Controller: sendRequest()
    activate Controller

    Controller->>Service: processRequest()
    activate Service

    Service->>Database: queryData()
    activate Database
    Database-->>Service: returnData()
    deactivate Database

    Service-->>Controller: returnResponse()
    deactivate Service

    Controller-->>User: sendResponse()
    deactivate Controller`;

  // Function to load the Mermaid sequence diagram data into the diagram
  function loadMermaidSeqDiagram() {
    diagramInstance.loadDiagramFromMermaid(mermaidData);
  };

  return (
    // Initialize Diagram component
    <div>
      <button onClick={loadMermaidSeqDiagram} id="loadMermaid">Load Mermaid</button>
      <DiagramComponent
        id="container" ref={(diagram: any) => (diagramInstance = diagram)}
        width={"100%"} height={"600px"}>
      </DiagramComponent>
    </div>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

{% endraw %}