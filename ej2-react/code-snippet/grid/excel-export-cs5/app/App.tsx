import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, ExcelExport, ExcelExportProperties, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let switchData: SwitchComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      const exportProperties: ExcelExportProperties = {
        includeHiddenColumn: (switchData as SwitchComponent).checked
      };
      grid.excelExport(exportProperties);
    }
  }
  return (<div>
    <label style={{ padding: "10px 10px" }}>Include or exclude hidden columns </label>
    <SwitchComponent ref={s => switchData = s}></SwitchComponent>
    <GridComponent id='Grid' dataSource={data} allowPaging={true} allowExcelExport={true} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='130' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='120' visible={false} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, ExcelExport]} />
    </GridComponent></div>)
};
export default App;