import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Toolbar, Inject, Page, Edit, PageSettingsModel, EditSettingsModel, RowDataBoundEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const pageSettings: PageSettingsModel = { pageSize: 8 };
  const editSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
  const rowDataBound = ((args: RowDataBoundEventArgs) => {
    const rowIndex: any = parseInt((args as any).row.getAttribute('aria-rowIndex'));
    const currentPageNumber: any = (grid as GridComponent).pageSettings.currentPage;
    const pageSize: any = (grid as GridComponent).pageSettings.pageSize;
    const startIndex: any = ((currentPageNumber as number) - 1) * (pageSize as number);
    (args as any).row.querySelector('.e-rowcell').innerHTML = (startIndex + rowIndex).toString();
  })
  return (
    <div>
      <GridComponent dataSource={data} height={315} ref={g => grid = g} allowPaging={true} pageSettings={pageSettings} editSettings={editSettings} rowDataBound={rowDataBound}>
        <ColumnsDirective>
          <ColumnDirective field='S.No' headerText='S.No' width='90' textAlign='Center' />
          <ColumnDirective field='OrderID' headerText='Order ID' width='90' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' format='C2' width='90' textAlign='Right' />
          <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Toolbar, Page, Edit]} />
      </GridComponent></div>
  )
}
export default App;
