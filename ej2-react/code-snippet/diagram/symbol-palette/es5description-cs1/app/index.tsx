{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Diagram,
  NodeModel,
  SymbolPalette,
  SymbolInfo,
  Node,
  ConnectorModel,
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
      ]}
      symbolHeight={80}
      symbolWidth={80}
      //Sets the size, appearance and description of a symbol
      getSymbolInfo={(symbol) => {
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