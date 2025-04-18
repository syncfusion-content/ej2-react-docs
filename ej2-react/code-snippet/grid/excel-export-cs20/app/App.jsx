import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, ExcelExport, Toolbar} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData, data } from './datasource';

function App() {
  let grid;
  const toolbar = ['ExcelExport'];
  const childGrid = {
    dataSource: data,
    queryString: 'EmployeeID',
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120,},
      { field: 'Freight', headerText: 'Freight',  textAlign: 'Right', width: 120 },
      { field: 'OrderDate', headerText: 'Order Date', width: 120, format: { type: 'date', format: 'dd-MM-yyyy' },},
      { field: 'ShipCity', headerText: 'Ship City', width: 120 },
    ],
  };
  const toolbarClick = (args) => {
    if (args.item.id === 'Grid_excelexport') {
      const exportProperties = {
        hierarchyExportMode: 'All',
      };
      grid.excelExport(exportProperties);
    }
  };
  const exportDetailDataBound = (args) => {
    args.childGrid.columns[2].format = 'dd\\/MM\\/yyyy';
  };
  return (
    <div>
      <GridComponent ref={(g) => (grid = g)} id="Grid" dataSource={employeeData} height="220px" toolbar={toolbar} allowExcelExport={true} childGrid={childGrid} exportDetailDataBound={exportDetailDataBound} toolbarClick={toolbarClick}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' />
          <ColumnDirective field='FirstName' headerText='First Name' width='100' />
          <ColumnDirective field='LastName' headerText='Last Name' width='150' />
          <ColumnDirective field='City' headerText='City' width='120' />
        </ColumnsDirective>
        <Inject services={[DetailRow, Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
}
export default App;