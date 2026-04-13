import { ColumnDirective, ColumnsDirective, Page, Resize, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { ContextMenu, Edit, ExcelExport, Inject, PdfExport, Sort } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    const editSettings = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Row'
    };
    const pageSettings = { pageSize: 7 };
    const contextMenuItems = ['AutoFit', 'AutoFitAll',
        'SortAscending', 'SortDescending', 'Edit', 'Delete', 'Save',
        'Cancel', 'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
        'LastPage', 'NextPage', 'Indent', 'Outdent'];
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageSettings} allowSorting={true} allowResizing={true} editSettings={editSettings} allowPdfExport={true} allowExcelExport={true} contextMenuItems={contextMenuItems}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' isPrimaryKey={true} headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Edit, ContextMenu, Page, PdfExport, ExcelExport]}/>
    </TreeGridComponent>;
}
;
export default App;
