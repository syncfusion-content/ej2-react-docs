import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, SymbolPaletteComponent } from "@syncfusion/ej2-react-diagrams";

// Define connector symbols
let connectorSymbols = [
  {
    id: 'Link1',
    type: 'Orthogonal',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 }
  },
  {
    id: 'Link2',
    type: 'Orthogonal',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
   
    style: {strokeDashArray: '4 4' },
  },
  {
    id: 'Link3',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
  },
  {
    id: 'Link4',
    type: 'Bezier',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
  },
];

// App component
let App = () => {
  return (
    <div>
      <SymbolPaletteComponent
        id="symbolpalette"
        expandMode="Multiple"
        palettes={[
          {
            id: "flow",
            expanded: true,
            symbols: connectorSymbols,
            title: "Connectors",
          },
        ]}
      />
      <DiagramComponent
        id="diagram"
        width="100%"
        height="700px"
      />
    </div>
  );
};

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
