import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // defined the array of object data
  const data = [
    { OrderID: 10248, CustomerID: 'VINET', OrderDate: new Date(8364186e5), Freight: 32.38 },
    { OrderID: 10249, CustomerID: 'TOMSP', OrderDate: new Date(836505e6), Freight: 11.61 },
    { OrderID: 10250, CustomerID: 'HANAR', OrderDate: new Date(8367642e5), Freight: 65.83 },
    { OrderID: 10251, CustomerID: 'VICTE', OrderDate: new Date(8367642e5), Freight: 41.34 },
    { OrderID: 10252, CustomerID: 'SUPRD', OrderDate: new Date(8368506e5), Freight: 51.3 },
    { OrderID: 10253, CustomerID: 'HANAR', OrderDate: new Date(836937e6), Freight: 58.17 },
    { OrderID: 10254, CustomerID: 'CHOPS', OrderDate: new Date(8370234e5), Freight: 22.98 },
    { OrderID: 10255, CustomerID: 'RICSU', OrderDate: new Date(8371098e5), Freight: 148.33 },
    { OrderID: 10256, CustomerID: 'WELLI', OrderDate: new Date(837369e6), Freight: 13.97 }
  ];
  // maps the appropriate column to fields property
  const fields = { text: 'CustomerID', value: 'OrderID', groupBy: 'CustomerID'};
  // set groupTemplate to multicolumn ComboBox input element
  const groupTemplate = '<div class="e-group-temp">Key is: ${key}, Field is: ${field}, Count is: ${count}</div>';

  return (
    // specifies the tag for render the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" dataSource={data} fields={fields} groupTemplate={groupTemplate}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' header='Order ID' width={120}></ColumnDirective>
            <ColumnDirective field='CustomerID' header='Customer ID' width={140}></ColumnDirective>
            <ColumnDirective field='Freight' header='Freight' width={120}></ColumnDirective>
            <ColumnDirective field='OrderDate' header='Order Date' width={140}></ColumnDirective>
        </ColumnsDirective>
    </MultiColumnComboBoxComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('multicolumn'));
