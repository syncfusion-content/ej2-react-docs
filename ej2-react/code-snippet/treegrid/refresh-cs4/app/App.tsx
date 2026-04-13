


import * as React from 'react';
import { projectData } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { PdfExportProperties } from '@syncfusion/ej2-react-grids';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Filter, Toolbar, ToolbarItems, Page, TreeGrid, PdfExport, PageSettingsModel } from '@syncfusion/ej2-react-treegrid';

/* tslint:disable */

function App() {

  const toolbarOptions: ToolbarItems[] = ['PdfExport'];
  let treegrid: TreeGridComponent | null;
  const pageOptions: PageSettingsModel = {pageSize:5, pageCount:5};
  const toolbarClick = (args: ClickEventArgs) => {
    if (treegrid && args.item.text === 'PDF Export') {
         // get all filtered records
          let pdfdata: object[] = [];
          pdfdata = (treegrid as TreeGridComponent).filterModule.filteredResult;
          const exportProperties: PdfExportProperties = {
            dataSource: pdfdata,
          };
          if (treegrid) {
            (treegrid as TreeGridComponent).pdfExport(exportProperties);
          }
    }
  }

    return (
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' pageSettings={pageOptions}
      toolbarClick={toolbarClick} toolbar={toolbarOptions} allowPaging={true}
       ref={g => treegrid = g} allowFiltering={true} allowPdfExport={true}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Filter, Toolbar, Page, PdfExport]} />
      </TreeGridComponent>
    );
};
export default App;


