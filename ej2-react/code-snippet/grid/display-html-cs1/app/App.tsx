
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { SwitchComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
function App() {
  let grid: GridComponent | null;
  const change = ((args: ChangeEventArgs) => {
    if (args.checked) {
      (grid as GridComponent).getColumnByField('CustomerID').disableHtmlEncode = false;
    } else {
      (grid as GridComponent).getColumnByField('CustomerID').disableHtmlEncode = true;
    }
    (grid as GridComponent).refreshColumns();
  })
  return (
    <div>
      <div>
        <label style={{ padding: "10px 10px" }}>
          Enable or disable HTML Encode
        </label>
        <SwitchComponent id="switch" change={change}></SwitchComponent>
        <GridComponent ref={g => grid = g} dataSource={data} height={315}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
            <ColumnDirective field='CustomerID' headerText='<strong> Customer ID </strong>' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' width='150' textAlign='Right' format='C' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='120' />

          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
