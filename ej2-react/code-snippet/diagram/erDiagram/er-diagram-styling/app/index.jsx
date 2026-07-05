import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Diagram, ErDiagrams } from "@syncfusion/ej2-react-diagrams";

Diagram.Inject(ErDiagrams);

// Define ER entities with custom styling
const customer = {
  id: 'Customer',
  offsetX: 300,
  offsetY: 300,
  shape: {
    type: 'Er',
    header: {
      annotation: { content: 'CUSTOMER TABLE', style: { bold: true, color: 'white' } },
      height: 35,
      style: {
        fill: '#2E75B6',
        color: 'white',
        fontSize: 12,
        bold: true
      }
    },
    fields: [
      {
        id: 'cust_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true
      },
      {
        id: 'cust_firstname',
        name: 'FirstName',
        dataType: 'VARCHAR(50)'
      },
      {
        id: 'cust_email',
        name: 'Email',
        dataType: 'VARCHAR(100)'
      }
    ],
    fieldDefaults: {
      alternateRowColors: ['#ffffff', '#E7F0F7']
    },
  },
  style: {
    fill: '#ffffff',
    strokeColor: '#2E75B6',
    strokeWidth: 1
  }
};

const product = {
  id: 'Product',
  offsetX: 550,
  offsetY: 300,
  shape: {
    type: 'Er',
    header: {
      annotation: { content: 'PRODUCT CATALOG', style: { bold: true, color: 'white' } },
      height: 35,
      style: {
        fill: '#70AD47',
        color: 'white',
        fontSize: 12,
        bold: true
      }
    },
    fields: [
      {
        id: 'prod_id',
        name: 'ProductID',
        dataType: 'INT',
        isPrimaryKey: true,
        style: { fill: '#FFE699' }
      },
      {
        id: 'prod_name',
        name: 'ProductName',
        dataType: 'VARCHAR(150)'
      },
      {
        id: 'prod_price',
        name: 'Price',
        dataType: 'DECIMAL(10,2)',
        style: { fill: '#C6E0B4' }
      }
    ],
    fieldDefaults: {
      alternateRowColors: ['#ffffff', '#F2F2F2']
    },
  },
  style: {
    fill: '#ffffff',
    strokeColor: '#70AD47',
    strokeWidth: 1.5,
  }
};

// Initialize diagram control
function App() {
  return (
    <DiagramComponent id="container"
      width={'100%'}
      height={'600px'}
      nodes={[customer, product]}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
