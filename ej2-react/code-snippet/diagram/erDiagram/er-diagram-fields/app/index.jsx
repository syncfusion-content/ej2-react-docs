import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Diagram, ErDiagrams } from "@syncfusion/ej2-react-diagrams";

Diagram.Inject(ErDiagrams);

// Define an ER entity with various field properties
const product = {
  id: 'Product',
  offsetX: 300,
  offsetY: 200,
  shape: {
    type: 'Er',
    header: {
      annotation: { content: 'Product' }
    },
    fields: [
      {
        id: 'prod_id',
        name: 'ProductID',
        dataType: 'INT',
        isPrimaryKey: true,
        constraints: ['NotNull']
      },
      {
        id: 'prod_code',
        name: 'ProductCode',
        dataType: 'VARCHAR(50)',
        constraints: ['NotNull', 'Unique']
      },
      {
        id: 'prod_name',
        name: 'ProductName',
        dataType: 'VARCHAR(150)',
        constraints: ['NotNull']
      },
      {
        id: 'prod_price',
        name: 'Price',
        dataType: 'DECIMAL(10,2)',
        constraints: ['NotNull']
      },
      {
        id: 'prod_desc',
        name: 'Description',
        dataType: 'TEXT'
      },
      {
        id: 'prod_catid',
        name: 'CategoryID',
        dataType: 'INT',
        isForeignKey: true
      }
    ]
  }
};

// Initialize diagram control
function App() {
  return (
    <DiagramComponent id="container"
      width={'100%'}
      height={'400px'}
      nodes={[product]}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
