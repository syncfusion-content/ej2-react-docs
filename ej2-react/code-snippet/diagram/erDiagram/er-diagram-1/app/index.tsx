import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Diagram, ErDiagrams } from "@syncfusion/ej2-react-diagrams";
import { NodeModel, ErShapeModel } from "@syncfusion/ej2-diagrams";

Diagram.Inject(ErDiagrams);

// Define a basic ER entity (Customer table)
const customer: NodeModel = {
  id: 'Customer',
  offsetX: 400,
  offsetY: 300,
  shape: {
    type: 'Er',
    header: {
      annotation: { content: 'Customer' }
    },
    fields: [
      {
        id: 'cust_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true,
        constraints: ['NotNull']
      },
      {
        id: 'cust_firstname',
        name: 'FirstName',
        dataType: 'VARCHAR(50)',
        constraints: ['NotNull']
      },
      {
        id: 'cust_email',
        name: 'Email',
        dataType: 'VARCHAR(100)',
        constraints: ['Unique']
      }
    ]
  } as ErShapeModel
};

// Initialize diagram control
function App() {
  return (
    <DiagramComponent id="container"
      width={'100%'}
      height={'600px'}
      nodes={[customer]}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


