

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DetailRow, Grid, GridModel, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { childdata, employeeData } from './datasource';

function App() {
  let grid: Grid | null;
  let childGridOptions : GridModel = {
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    dataSource: childdata,
    load() {
      const str: string = 'EmployeeID';
      (this as any).parentDetails.parentKeyFieldValue =
        (this as any).parentDetails.parentRowData[str];
    },
    queryString: 'ID'
  };

  return (<div>
    <GridComponent  dataSource={employeeData} childGrid={childGridOptions} height={265} ref={g => grid = g} >
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'/>
        <ColumnDirective field='FirstName' headerText='First Name' width='150'/>
        <ColumnDirective field='City' headerText='City' width='150'/>
        <ColumnDirective field='Country' headerText='Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[DetailRow]}/>
    </GridComponent>
  </div>)
};
export default App;


