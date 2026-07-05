import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Diagram, ErDiagrams } from "@syncfusion/ej2-react-diagrams";
import { ConnectorModel, ErConnectorShapeModel, ErMultiplicityTypes } from "@syncfusion/ej2-diagrams";

Diagram.Inject(ErDiagrams);

// Define ER connectors with all multiplicity types
const connectors = [
  // One
  {
    id: 'er_one',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 100 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'One' },
      targetMultiplicity: { type: 'One' }
    }
  },
  // Many
  {
    id: 'er_many',
    sourcePoint: { x: 100, y: 140 },
    targetPoint: { x: 300, y: 140 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'Many' },
      targetMultiplicity: { type: 'Many' }
    }
  },
  // One and only one
  {
    id: 'er_one_or_one',
    sourcePoint: { x: 100, y: 180 },
    targetPoint: { x: 300, y: 180 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'OneAndOnlyOne' },
      targetMultiplicity: { type: 'OneAndOnlyOne' }
    }
  },
  // One or many
  {
    id: 'er_one_or_many',
    sourcePoint: { x: 100, y: 220 },
    targetPoint: { x: 300, y: 220 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'OneOrMany' },
      targetMultiplicity: { type: 'OneOrMany' }
    }
  },
  // Zero or one
  {
    id: 'er_zero_or_one',
    sourcePoint: { x: 100, y: 260 },
    targetPoint: { x: 300, y: 260 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'ZeroOrOne' },
      targetMultiplicity: { type: 'ZeroOrOne' }
    }
  },
  // Zero or many
  {
    id: 'er_zero_or_many',
    sourcePoint: { x: 100, y: 300 },
    targetPoint: { x: 300, y: 300 },
    shape: {
      type: 'Er',
      sourceMultiplicity: { type: 'ZeroOrMany' },
      targetMultiplicity: { type: 'ZeroOrMany' }
    }
  }
];

// Initialize diagram control
function App() {
  return (
    <DiagramComponent id="container"
      width={'100%'}
      height={'600px'}
      nodes={[customer, order]}
      connectors={connectors}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
