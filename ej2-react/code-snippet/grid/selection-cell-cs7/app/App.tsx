import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, GridComponent, Page, PageSettingsModel, SelectionSettingsModel, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const selectionSettings: SelectionSettingsModel = { mode: 'Cell', type: 'Multiple' };
  const pageOptions: PageSettingsModel = { pageSize: 5 };
  const clearCellSelection = () => {
    (grid as GridComponent).clearCellSelection();
  }
  return (<div>
    <ButtonComponent onClick={clearCellSelection}>Clear cell selection</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} selectionSettings={selectionSettings} allowPaging={true} pageSettings={pageOptions}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;