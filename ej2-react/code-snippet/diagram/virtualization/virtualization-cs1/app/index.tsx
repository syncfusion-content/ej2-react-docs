
import * as React from "react";
import * as ReactDOM from 'react-dom';
import { DiagramComponent, NodeModel, DiagramConstraints } from "@syncfusion/ej2-react-diagrams";

export default function App() {

  function createNodes() {
    // Function to create nodes for the diagram
    const nodes: NodeModel[] = [];
    const nodeWidth = 50;
    const nodeHeight = 50;
    const space = 50;
    const nodesPerRow = 50;
    const totalNodes = 500;

    // Loop to create the specified number of nodes
    for (let i = 0; i < totalNodes; i++) {
      const row = Math.floor(i / nodesPerRow);
      const col = i % nodesPerRow;

      // Create a node object
      const node: NodeModel = {
        id: `node${i + 1}`,
        width: nodeWidth,
        height: nodeHeight,
        offsetX: col * (nodeWidth + space) + nodeWidth / 2,
        offsetY: row * (nodeHeight + space) + nodeHeight / 2,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: `${i + 1}` }],
      };
      nodes.push(node);
    }
    return nodes;
  }

  return (
    // Initialize Diagram component
    <DiagramComponent
      id="container"
      width={"100%"}
      height={600}

      //Enable virtualization in diagram
      constraints={DiagramConstraints.Default | DiagramConstraints.Virtualization}
      nodes={createNodes()}
    />
  );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);
