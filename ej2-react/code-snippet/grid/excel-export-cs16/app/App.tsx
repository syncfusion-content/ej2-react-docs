import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, ExcelExport, GridComponent, Inject, PageSettingsModel, Toolbar, ToolbarItems, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const pageOptions: PageSettingsModel = { pageSize: 5 };
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const formatOptions = { type: 'date', format: "EEE, MMM d, ''yy" };
  const toolbarClick = (args: ClickEventArgs) => {
    if (args.item.text === 'Excel Export') {
      (grid as GridComponent).excelExport();
    }
  }

  return (
    <div>
      <GridComponent dataSource={data} toolbar={toolbar} allowExcelExport={true} allowPaging={true} pageSettings={pageOptions}
        toolbarClick={toolbarClick} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='OrderDate' headerText='OrderDate' format={formatOptions} width='150' />
          <ColumnDirective field='Freight' headerText='Freight' format='C2' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, Page, ExcelExport]} />
      </GridComponent>
    </div>
  );
}
export default App;