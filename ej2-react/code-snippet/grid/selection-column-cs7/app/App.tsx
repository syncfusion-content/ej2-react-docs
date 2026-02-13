import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const selectionSettings: SelectionSettingsModel = { allowColumnSelection: true };
  const pageOptions: PageSettingsModel = {
    pageSize: 5
  };
  const clearColumnSelection = () => {
    (grid as GridComponent).selectionModule.clearColumnSelection();
  }
  return (
    <div>
      <ButtonComponent onClick={clearColumnSelection}>Clear column selection</ButtonComponent>
      <GridComponent dataSource={data} allowPaging={true} selectionSettings={selectionSettings} pageSettings={pageOptions} ref={g => grid = g}>
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