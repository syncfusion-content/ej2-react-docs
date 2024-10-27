
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { DiagramComponent, Inject, MindMap } from "@syncfusion/ej2-react-diagrams";

export default function App() {
    let diagramInstance;

    // Mermaid syntax for the mindmap data
    let mermaidMindmapData = `mindmap
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
    function getNodeDefaults(node) {
        node.width = 140;
        node.height = 50;
        node.annotations[0].style.bold = true;
        return node;
    };

    // Function to set default properties for connectors
    function getConnectorDefaults(connector) {
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
                ref={(diagram) => (diagramInstance = diagram)}
                width={"100%"}
                height={"350px"}
                layout={{
                    type: 'MindMap',
                    verticalSpacing: 50,
                    horizontalSpacing: 50,
                    orientation: 'Horizontal',
                }}
                getNodeDefaults={getNodeDefaults}
                getConnectorDefaults={getConnectorDefaults}
            >
                <Inject services={[MindMap]} />
            </DiagramComponent>
        </div>
    );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);
