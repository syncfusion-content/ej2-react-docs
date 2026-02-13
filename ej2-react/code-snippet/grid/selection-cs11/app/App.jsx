import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

function App() {
  let grid;
  const selectionSettings = { type: 'Multiple' };
  const pageOptions = {
    pageSize: 5
  };
  const clearRowSelection = () => {
    grid.clearRowSelection();
  }
  return (
    <div>
      <ButtonComponent onClick={clearRowSelection}>Clear row selection</ButtonComponent>
      <GridComponent dataSource={data} allowPaging={true} selectedRowIndex={2} selectionSettings={selectionSettings} pageSettings={pageOptions} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" isPrimaryKey={true} width="120" textAlign="Right"></ColumnDirective>
          <ColumnDirective field="CustomerID" headerText="Customer ID" width="120">
          </ColumnDirective>
          <ColumnDirective field="ShipCountry" headerText="Ship Country" width="120">
          </ColumnDirective>
          <ColumnDirective field="Freight" headerText="Freight" format='C2' width="100" textAlign="Right">
          </ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
}
export default App;