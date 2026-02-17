import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems, ExcelExport, ExcelQueryCellInfoEventArgs, ExcelExportProperties, Inject, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { inventoryData } from './datasource';

function App() {
  let grid;
  const toolbar = ['ExcelExport'];
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      const excelExportProperties = {
        includeHiddenColumn: true,
      };
      grid.excelExport(excelExportProperties);
    }
  }
  const excelQueryCellInfo = (args) => {
    if (args.column.field === 'TotalPatents') {
      args.value = valueAccess(args.column.field, (args.data));
      args.cell.formula = args.value;
    }
  }

  const valueAccess = (field, data) => {
    const cell = (inventoryData).indexOf(data) + 2;
    return '=E' + cell + '+' + 'B' + cell;
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={inventoryData} height={250} allowPaging={true} toolbar={toolbar} allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g} excelQueryCellInfo={excelQueryCellInfo}>
        <ColumnsDirective>
          <ColumnDirective field='Inventor' headerText='Inventor Name' width='120' textAlign='Right' />
          <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' width='150' />
          <ColumnDirective field='Country' headerText='Country' width='150' />
          <ColumnDirective field='Mainfieldsofinvention' headerText='Main fields of invention' width='150' />
          <ColumnDirective field='Number of INPADOC patents' headerText='Number of INPADOC patents' width='150' />
          <ColumnDirective field='TotalPatents' headerText='Total Patents' valueAccessor={valueAccess} width='150' visible={false} />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport, Page]} />
      </GridComponent>
    </div>
  );
}
export default App;