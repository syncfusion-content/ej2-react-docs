import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, ErDiagrams } from "@syncfusion/ej2-react-diagrams";

// Define an ER entity with customized header
const customer = {
  id: 'Customer',
  offsetX: 300,
  offsetY: 200,
  shape: {
    type: 'Er',
    header: {
      annotation: { content: 'CUSTOMER TABLE', style: {
        color: 'white',
        fontSize: 13,
        bold: true,
        fontFamily: 'Arial'
      }},
      height: 35,
      style: {
        fill: '#2E75B6'
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
        id: 'cust_name',
        name: 'FirstName',
        dataType: 'VARCHAR(50)'
      },
      {
        id: 'cust_email',
        name: 'Email',
        dataType: 'VARCHAR(100)'
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
      nodes={[customer]} >
      <Inject services={[ErDiagrams]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
