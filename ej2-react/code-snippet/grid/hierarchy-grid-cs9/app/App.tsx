import { ColumnDirective, ColumnsDirective, GridComponent, ParentDetails } from '@syncfusion/ej2-react-grids';
import { DetailRow, Edit, GridModel, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData, ParentDetailsDataType } from './datasource';

function App() {
  let childGridOptions: GridModel = {
    created() {
      var parentRowData = (this.parentDetails as ParentDetails).parentRowData;
      (document.getElementById('message') as HTMLElement).innerHTML = `EmployeeID: ${(parentRowData as ParentDetailsDataType).EmployeeID}, FirstName: ${(parentRowData as ParentDetailsDataType).FirstName}, Title: ${(parentRowData as ParentDetailsDataType).Title}`;
    },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', allowEditing: false, width: 120 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    dataSource: data,
    queryString: 'EmployeeID',
  };
  return (<div>
    <div style={{ marginLeft: "100px" }}>
      <p style={{ color: "black", fontSize: "large" }} id="message"></p>
    </div>
    <GridComponent dataSource={employeeData} childGrid={childGridOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
        <ColumnDirective field='FirstName' headerText='First Name' width='150' />
        <ColumnDirective field='City' headerText='City' width='150' />
        <ColumnDirective field='Country' headerText='Country' width='150' />
      </ColumnsDirective>
      <Inject services={[DetailRow, Edit, Toolbar]} />
    </GridComponent ></div>
  )
};
export default App;