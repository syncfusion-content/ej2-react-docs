

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, MindMap, NodeModel, ConnectorModel } from "@syncfusion/ej2-react-diagrams";

export default function App() {
  let diagramInstance: DiagramComponent;

  // Mermaid syntax for the mindmap data
  let mermaidMindmapData: string = `mindmap
                              root((mindmap))
                                Origins
                                  Popularisation
                                Research
                                  On effectiveness<br/>and features
                                  On Automatic creation
                                Tools
                                  Pen and paper
                                  Mermaid`;

  // Function to set default properties for nodes
  function getNodeDefaults(node: NodeModel | any): NodeModel {
    node.width = 140;
    node.height = 50;
    node.annotations[0].style.bold = true;
    return node;
  };

  // Function to set default properties for connectors
  function getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    return connector;
  };

  // Function to load the Mermaid mindmap data into the diagram
  function loadMermaidMindmap() {
    diagramInstance.loadDiagramFromMermaid(mermaidMindmapData);
  };

  return (
    // Initialize Diagram component
    <div>
      <button onClick={loadMermaidMindmap} id="loadMermaidMindmap">Load Mermaid Mindmap</button>
      <DiagramComponent
        id="container"
        ref={(diagram: any) => (diagramInstance = diagram)}
        width={"100%"}
        height={"350px"}
        layout={{ type: 'MindMap', orientation: 'Horizontal' }}
        getNodeDefaults={getNodeDefaults}
        getConnectorDefaults={getConnectorDefaults}
      >
        <Inject services={[MindMap]} />
      </DiagramComponent>
    </div>
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

