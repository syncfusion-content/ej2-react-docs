import { DataManager, Query } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, RowDataBoundEventArgs } from '@syncfusion/ej2-react-grids';
import { DetailRow, GridModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData, childData } from './datasource';

function App() {
  let childGrid: GridModel = {
    columns: [
      { field: 'Order', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'EmployeeID', headerText: 'EmployeeID', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    dataSource: childData,
    queryString: 'EmployeeID',
    allowPaging: true
  };
  const rowDataBound = (args: RowDataBoundEventArgs): void => {
    const filter: string = args.data.EmployeeID;
    const childrecord: object[] = new DataManager(childData as JSON[])
      .executeLocal(new Query().where("EmployeeID", "equal", filter, true));
    if (childrecord.length === 0) {
      // here hide which parent row has no child records
      const rowElement = args.row as HTMLTableRowElement;
      const cellElement= rowElement.querySelector('td') as HTMLTableCellElement
      cellElement.innerHTML = ' '; 
      cellElement.className = 'e-customizedexpandcell';
    }
  }
  return <GridComponent dataSource={employeeData} childGrid={childGrid} rowDataBound={rowDataBound}>
    <ColumnsDirective>
      <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
      <ColumnDirective field='FirstName' headerText='First Name' width='100' />
      <ColumnDirective field='City' headerText='City' width='100' />
      <ColumnDirective field='Country' headerText='Country' width='100' />
    </ColumnsDirective>
    <Inject services={[DetailRow]} />
  </GridComponent>
};
export default App;