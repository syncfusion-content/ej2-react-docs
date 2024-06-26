import {
  ColumnDirective, ColumnsDirective, GridComponent, Group, Inject, PdfExport,
  Toolbar, Grid, ToolbarItems, GroupSettingsModel, ExportGroupCaptionEventArgs
} from '@syncfusion/ej2-react-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const groupOptions: GroupSettingsModel = {
    columns: ['EmployeeID'],
    captionTemplate: '${field} - ${key}',
  };
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args['item'].id === 'CaptionTemplateGrid_pdfexport') {
      grid.pdfExport();
    }
  };
  const exportGroupCaption = (args: ExportGroupCaptionEventArgs) => {
    args.captionText = args.data['field'] + ' - ' + args.data['key'];
  };
  
  return (
    <GridComponent id="CaptionTemplateGrid" ref={(g) => (grid = g)} dataSource={employeeData} toolbar={toolbar}
      allowGrouping={true} groupSettings={groupOptions} allowPdfExport={true} toolbarClick={toolbarClick}
      exportGroupCaption={exportGroupCaption} height={315}>
      <ColumnsDirective>
        <ColumnDirective field="EmployeeID" headerText="Employee ID" width="120" textAlign="Right" />
        <ColumnDirective field="FirstName" headerText="First Name" width="120" />
        <ColumnDirective field="City" headerText="City" />
        <ColumnDirective field="Title" headerText="Title" width="170" />
      </ColumnsDirective>
      <Inject services={[Group, Toolbar, PdfExport]} />
    </GridComponent>
  );
}
export default App;


