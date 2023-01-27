import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Toolbar, Page, PdfExport, ExcelExport } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    const toolbarOptions = ['PdfExport', 'ExcelExport'];
    let treegrid;
    const pageOptions = { pageSize: 5, pageCount: 5 };
    const selectionOptions = { type: 'Multiple' };
    const toolbarClick = (args) => {
        if (treegrid && args.item.text === 'PDF Export') {
            const selectedRecords = treegrid.getSelectedRecords();
            const exportProperties = {
                dataSource: selectedRecords,
            };
            treegrid.current.pdfExport(exportProperties);
        }
        else if (treegrid && args.item.text === 'Excel Export') {
            const selectedRecords = treegrid.getSelectedRecords();
            const exportProperties = {
                dataSource: selectedRecords,
            };
            treegrid.excelExport(exportProperties);
        }
    };
    return (<TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' pageSettings={pageOptions} toolbarClick={toolbarClick} toolbar={toolbarOptions} allowPaging={true} ref={g => treegrid = g} allowPdfExport={true} allowExcelExport={true} selectionSettings={selectionOptions}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right'/>
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, Page, PdfExport, ExcelExport]}/>
      </TreeGridComponent>);
}
;
export default App;
