{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Diagram,
  NodeModel,
  SymbolPalette,
  SymbolInfo,
  SymbolPaletteComponent,
} from "@syncfusion/ej2-react-diagrams";
//Initialize the flowshapes for the symbol palette
export function getFlowShapes(): NodeModel[] {
  let flowShapes: NodeModel[] = [
    {
      id: "process",
      shape: {
        type: "Flow",
        shape: "Process",
      },
    },
    {
      id: "document",
      shape: {
        type: "Flow",
        shape: "Document",
      },
    },
    {
      id: "predefinedprocess",
      shape: {
        type: "Flow",
        shape: "PreDefinedProcess",
      },
    },
  ];
  return flowShapes;
}
function setPaletteNodeDefaults(node: NodeModel): void {
  node.width = 100;
  node.height = 100;
  node.style.strokeColor = "#3A3A3A";
}
//Initializes the symbol palette
function App() {
  return (
    <SymbolPaletteComponent
    id="container"
    expandMode={"Multiple"}
    palettes={[
      {
        id: "flow",
        expanded: true,
        symbols: getFlowShapes(),
        title: "Flow Shapes",
      },
    ]}
    symbolPreview={{
      height: 100,
      width: 100,
      offset: {
        x: 0.5,
        y: 0.5,
      },
    }}
    symbolMargin={{
      left: 12,
      right: 12,
      top: 12,
      bottom: 12,
    }}
    //Returns the default properties of node
    getNodeDefaults={setPaletteNodeDefaults}
    getSymbolInfo={(symbol: NodeModel): SymbolInfo => {
      return {
        fit: true,
      };
    }}
  />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


{% endraw %}