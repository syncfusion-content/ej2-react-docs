import { ColumnDirective, ColumnModel, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid;
  const headerTextMap = {
    'OrderID': 'Order ID',
    'CustomerID': 'Customer ID',
    'Freight': 'Freight Charge',
    'ShipCity': 'Ship To City'
  };

  const changeHeaderText = (() => {
    grid.columns.forEach((column) => {
      column.headerText = headerTextMap[column.field];
    });
    grid.refreshHeader();
  });

  return (
    <div>
      <ButtonComponent cssClass="e-success" onClick={changeHeaderText}>Change Header Text</ButtonComponent>
      <div style={{ padding: '20px 0 0 0' }}>
        <GridComponent dataSource={data} height={300} ref={g => grid = g} >
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
            <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
            <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;