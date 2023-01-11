

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DetailRow, GridModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
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
  const toolbaroptions: ToolbarItems[] = ['Print'];
      return (<GridComponent toolbar={toolbaroptions} hierarchyPrintMode='All' dataSource={employeeData}
                childGrid={childGridOptions}>
                <ColumnsDirective>
                  <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
                  <ColumnDirective field='FirstName' headerText='First Name' width='150'/>
                  <ColumnDirective field='City' headerText='City' width='150'/>
                  <ColumnDirective field='Country' headerText='Country' width='150'/>
              </ColumnsDirective>
              <Inject services={[DetailRow, Toolbar]}/>
          </GridComponent >)
};
export default App;


