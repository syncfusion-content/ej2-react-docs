import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page, Toolbar, ToolbarItems, ExcelExport, ExcelExportProperties, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const selectionOptions: SelectionSettingsModel = { type: 'Multiple', enableSimpleMultiRowSelection: true };
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      const selectedRecords = grid.getSelectedRecords();
      const exportProperties: ExcelExportProperties = {
        dataSource: selectedRecords
      };
      grid.excelExport(exportProperties);
    }
  }
  return (<GridComponent id='Grid' dataSource={data} allowPaging={true} allowExcelExport={true} toolbar={toolbar} selectionSettings={selectionOptions} toolbarClick={toolbarClick}
    ref={g => grid = g}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right" />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Page, Toolbar, ExcelExport]} />
  </GridComponent>)
};
export default App;