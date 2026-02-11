

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DetailRow, Grid, GridModel, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';
import {DataManager,Query} from '@syncfusion/ej2-data';

function App() {
  let childGridOptions : GridModel = {
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
  };
  
  const detailDataBound = (args) => {
    let orderData = data;
    let empIdValue = args.childGrid.parentDetails.parentRowData.EmployeeID;
    let matchedData = new DataManager(orderData).executeLocal(
      new Query().where('EmployeeID', 'equal', empIdValue, true)
    );
    args.childGrid.query = new Query();
    args.childGrid.dataSource = matchedData;
  };
    return (<div>
    <GridComponent  dataSource={employeeData} childGrid={childGridOptions} height={265} detailDataBound={detailDataBound}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
        <ColumnDirective field='FirstName' headerText='First Name' width='150'/>
        <ColumnDirective field='City' headerText='City' width='150'/>
        <ColumnDirective field='Country' headerText='Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[DetailRow]}/>
    </GridComponent></div>)
};
export default App;


