import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, DetailRow, ExcelExport, Toolbar, GridModel, ExcelExportProperties, ToolbarItems, DetailDataBoundEventArgs, ColumnModel} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data,employeeData } from './datasource';

function App() {
  let grid: GridComponent | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const childGrid: GridModel = {
    dataSource: data,
    queryString: "EmployeeID",
    columns: [
      { field: "OrderID", headerText: "Order ID", textAlign: "Right", width: 90 },
      { field: "CustomerID", headerText: "Customer ID", width: 100 },
      { field: "OrderDate", headerText: "Order Date", width: 120, format: { type: "date", format: "dd-MM-yyyy" },},
      { field: "ShipCity", headerText: "Ship City", width: 100 },
    ],
  };
  const toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'Grid_excelexport') {
      const exportProperties: ExcelExportProperties = {
        hierarchyExportMode: 'All',
      };
      (grid as GridComponent).excelExport(exportProperties);
    }
  }
  const exportDetailDataBound = (args: DetailDataBoundEventArgs) => {
    ((args.childGrid as GridModel).columns as ColumnModel[])[2].format = 'dd\\/MM\\/yyyy';
  }
  return (
    <div>
      <GridComponent ref={g => grid = g} id='Grid' dataSource={employeeData} height="220px" toolbar={toolbar} allowExcelExport={true} childGrid={childGrid} exportDetailDataBound={exportDetailDataBound} toolbarClick={toolbarClick}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
          <ColumnDirective field='FirstName' headerText='First Name' width='150' />
          <ColumnDirective field='LastName' headerText='Last Name' width='150' />
          <ColumnDirective field='City' headerText='City' width='150' />
        </ColumnsDirective>
        <Inject services={[DetailRow, Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
}
export default App;