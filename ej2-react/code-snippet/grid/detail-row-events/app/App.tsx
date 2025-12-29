

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DetailRow, GridModel, Inject, DetailExpandCollapseArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
  // Prevent expanding detail row.
  const detailExpand = (args: DetailExpandCollapseArgs) =>{
    if (args.rowData.FirstName === 'Nancy') {
      args.cancel = true;
    }
  }
  // Prevent collapsing detail row.
  const detailCollapse = (args: DetailExpandCollapseArgs) =>{
    if (args.rowData.FirstName === 'Andrew') {
      args.cancel = true;
    }
  }
  const childGridOptions : GridModel = {
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    dataSource: data,
    queryString: 'EmployeeID'
  };
  return (<GridComponent  dataSource={employeeData} childGrid={childGridOptions} detailExpand={detailExpand} detailCollapse={detailCollapse} height={315}>
            <ColumnsDirective>
              <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'/>
              <ColumnDirective field='FirstName' headerText='First Name' width='150'/>
              <ColumnDirective field='City' headerText='City' width='150'/>
              <ColumnDirective field='Country' headerText='Country' width='150'/>
          </ColumnsDirective>
          <Inject services={[DetailRow]}/>
        </GridComponent >)
};
export default App;


