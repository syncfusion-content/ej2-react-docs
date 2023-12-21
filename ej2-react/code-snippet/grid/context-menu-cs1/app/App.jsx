import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu, Edit, Filter, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import { ExcelExport, PdfExport } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const contextMenuItems = ['AutoFit', 'AutoFitAll',
        'SortAscending', 'SortDescending', 'Copy', 'Edit', 'Delete', 'Save',
        'Cancel', 'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
        'LastPage', 'NextPage'];
    const editing = { allowDeleting: true, allowEditing: true };
    return (<div>
      <GridComponent dataSource={data} allowPaging={true} allowSorting={true} allowExcelExport={true} allowPdfExport={true} contextMenuItems={contextMenuItems} editSettings={editing} allowGrouping={true}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='CustomerID' headerText='Customer Name' width='140'/>
          <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' editType='numericedit' width='140'/>
          <ColumnDirective field='ShipName' headerText='Ship Name' width='200'/>
        </ColumnsDirective>
        <Inject services={[Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Group]}/>
      </GridComponent>
    </div>);
}
;
export default App;
