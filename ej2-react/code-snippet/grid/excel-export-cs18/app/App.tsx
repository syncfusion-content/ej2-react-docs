import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems, ExcelExport, ExcelQueryCellInfoEventArgs, ExcelExportProperties, Inject, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { inventoryData } from './datasource';

interface CustomExcelCell {
  formula: string;
}
function App() {
  let grid: GridComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_excelexport') {
      const excelExportProperties: ExcelExportProperties = {
        includeHiddenColumn: true,
      };
      grid.excelExport(excelExportProperties);
    }
  }
  const excelQueryCellInfo = (args: ExcelQueryCellInfoEventArgs) => {
    if (args.column.field === 'TotalPatents') {
      args.value = valueAccess(args.column.field, (args.data as Object[]));
      (args.cell as CustomExcelCell).formula = args.value;
    }
  }

  const valueAccess = (field: string, data: Object[]) => {
    const cell = (inventoryData as Object[]).indexOf(data) + 2;
    return '=E' + cell + '+' + 'B' + cell;
  }
  return (
    <div>
      <GridComponent id='Grid' dataSource={inventoryData} height={270} allowPaging={true} toolbar={toolbar} allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g} excelQueryCellInfo={excelQueryCellInfo}>
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