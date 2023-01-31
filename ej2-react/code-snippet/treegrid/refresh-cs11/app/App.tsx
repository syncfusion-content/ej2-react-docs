


import * as React from 'react';
import { projectData } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject, SelectionSettingsModel, PageSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { Toolbar, ToolbarItems, Page, TreeGrid, PdfExport, ExcelExport } from '@syncfusion/ej2-react-treegrid';

/* tslint:disable */

function App() {

  const toolbarOptions: ToolbarItems[] = ['PdfExport', 'ExcelExport'];
  let treegrid: TreeGridComponent | null;
  const selectionOptions: SelectionSettingsModel = {type: 'Multiple'};
  const pageOptions: PageSettingsModel = {pageSize:5, pageCount:5};
  const toolbarClick = (args: ClickEventArgs) => {
    if (treegrid && args.item.text === 'PDF Export') {
      treegrid.showSpinner();
      treegrid.pdfExport();
    } else if (treegrid && args.item.text === 'Excel Export') {
        treegrid.showSpinner();
        treegrid.excelExport();
    }
  }

  const pdfExportComplete = (): void => {
    if (treegrid) {
      treegrid.hideSpinner();
    }
  }
  const excelExportComplete = (): void => {
    if (treegrid) {
      treegrid.hideSpinner();
    }
  }

    return (
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' allowPaging={true} pageSettings={pageOptions}
      toolbarClick={toolbarClick} toolbar={toolbarOptions}
       ref={g => treegrid = g} allowPdfExport={true} allowExcelExport={true}
       selectionSettings={selectionOptions} pdfExportComplete={pdfExportComplete} excelExportComplete={excelExportComplete}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Toolbar, Page, PdfExport, ExcelExport]} />
      </TreeGridComponent>
    );
};
export default App;


