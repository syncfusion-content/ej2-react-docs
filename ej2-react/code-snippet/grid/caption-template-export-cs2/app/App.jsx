import { ColumnDirective, ColumnsDirective, GridComponent, Group, Inject,
  ExcelExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid;
  const toolbar = ['ExcelExport'];
  const groupOptions = {
    columns: ['EmployeeID'],
    captionTemplate: '${field} - ${key}',
  };
  const toolbarClick = (args) => {
    if (grid && args['item'].id === 'CaptionTemplateGrid_excelexport') {
      grid.excelExport();
    }
  };
  const exportGroupCaption = (args) => {
    args.captionText = args.data.field + ' - ' + args.data.key;
  };

  return (
    <GridComponent id="CaptionTemplateGrid" ref={(g) => (grid = g)} dataSource={employeeData} toolbar={toolbar}
      allowGrouping={true} groupSettings={groupOptions} allowExcelExport={true} toolbarClick={toolbarClick}
      exportGroupCaption={exportGroupCaption} height={315}>
      <ColumnsDirective>
        <ColumnDirective field="EmployeeID" headerText="Employee ID" width="120" textAlign="Right" />
        <ColumnDirective field="FirstName" headerText="First Name" width="120" />
        <ColumnDirective field="City" headerText="City" />
        <ColumnDirective field="Title" headerText="Title" width="170" />
      </ColumnsDirective>
      <Inject services={[Group, Toolbar, ExcelExport]} />
    </GridComponent>
  );
}
export default App;