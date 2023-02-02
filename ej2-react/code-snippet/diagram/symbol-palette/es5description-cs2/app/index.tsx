{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Diagram,
  NodeModel,
  SymbolPalette,
  SymbolInfo,
  Node,
  SymbolPaletteComponent,
} from "@syncfusion/ej2-react-diagrams";
//Initialize the basicshapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
  let basicShapes: NodeModel[] = [
    {
      id: "Rectangle",
      shape: {
        type: "Basic",
        shape: "Rectangle",
      },
    },
    {
      id: "Ellipse",
      shape: {
        type: "Basic",
        shape: "Ellipse",
      },
    },
    {
      id: "Hexagon",
      shape: {
        type: "Basic",
        shape: "Hexagon",
      },
    },
  ];
  return basicShapes;
}
//Initialize the flowshapes for the symbol palette
export function getFlowShapes(): NodeModel[] {
  let flowShapes: NodeModel[] = [
    {
      id: "Process",
      shape: {
        type: "Flow",
        shape: "Process",
      },
    },
    {
      id: "Document",
      shape: {
        type: "Flow",
        shape: "Document",
      },
    },
  ];
  return flowShapes;
}
//Initializes the symbol palette
function App() {
  return (
    <SymbolPaletteComponent
      id="container"
      expandMode={"Multiple"}
      palettes={[
        {
          id: "basic",
          expanded: true,
          symbols: getBasicShapes(),
          title: "Basic Shapes",
          iconCss: "e-ddb-icons e-basic",
        },
        {
          id: "flow",
          expanded: true,
          symbols: getFlowShapes(),
          title: "Flow Shapes",
          iconCss: "e-ddb-icons e-flow",
        },
      ]}
      symbolHeight={80}
      symbolWidth={80}
      paletteExpanding={function (args) {
        if (args.palette.id === "basic") {
          // Basic shapes panel does not collapse
          args.cancel = true;
        } else {
          // Swimlane shapes panel collapse and expand
          args.cancel = false;
        }
      }}
      //Sets the size, appearance and description of a symbol
      getSymbolInfo={(symbol: Node | Connector): SymbolInfo => {
        if (symbol["text"] !== undefined) {
          return {
            width: 75,
            height: 40,
            //Add or Remove the Text for Symbol palette item.
            description: {
              //Defines the symbol description
              text: symbol["text"],
              //Defines how to handle the text when its size exceeds the given symbol size
              overflow: "Wrap",
            },
          };
        }
        return {
          width: 75,
          height: 40,
          description: {
            text: symbol.shape["shape"],
          },
        };
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);




{% endraw %}