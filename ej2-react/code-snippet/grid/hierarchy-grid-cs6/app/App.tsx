import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { AddEventArgs, DetailRow, Edit, GridModel, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
  let childGridOptions : GridModel = {
    actionBegin(args: AddEventArgs) {
      if (args.requestType === "add") {
        /** parentKeyFieldValue refers to the queryString field value of the parent record. */
        args.data['EmployeeID'] = this.parentDetails.parentKeyFieldValue; // 'this' refers to the instance of the child grid.
       }
    },
    columns: [
      { field: 'OrderID', headerText: 'Order ID', isPrimaryKey:true, textAlign: 'Right', width: 120 },
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', allowEditing:false, width: 120 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    queryString: 'EmployeeID',
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  };
  return (
    <GridComponent dataSource={employeeData} childGrid={childGridOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
        <ColumnDirective field='FirstName' headerText='First Name' width='150'/>
        <ColumnDirective field='City' headerText='City' width='150'/>
        <ColumnDirective field='Country' headerText='Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[DetailRow, Edit, Toolbar]}/>
    </GridComponent >
  )
};
export default App;