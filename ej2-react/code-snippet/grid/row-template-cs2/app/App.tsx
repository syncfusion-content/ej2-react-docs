

import { ColumnDirective, ColumnsDirective, GridComponent, DetailDataBoundEventArgs, DetailRow, Inject, Grid } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData, data } from './datasource';

function App() {
  const gridTemplate = (props): any => {
    const src = props.EmployeeID + ".png";
    return (
      <div className="custom-grid" ></div>
    );
  }
  const detailDataBound = (e: DetailDataBoundEventArgs) => {
    let detail = new Grid({
      dataSource: data.filter((item: Object) => item['EmployeeID'] === e.data['EmployeeID']).slice(0, 3),
      columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 110 },
        { field: 'CustomerID', headerText: 'Customer Name', width: 140 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
      ]
    });
    detail.appendTo(e.detailElement.querySelector('.custom-grid'));
  }
  return (<div>
    <GridComponent dataSource={employeeData.slice(2, 5)} detailTemplate={gridTemplate} height='315' detailDataBound={detailDataBound}>
      <ColumnsDirective>
        <ColumnDirective field='FirstName' headerText='First Name' width='140' />
        <ColumnDirective headerText='Last Name' width='140' field='LastName' />
        <ColumnDirective headerText='Title' width='150' field='Title' />
        <ColumnDirective headerText='Country' width='150' field='Country' />
      </ColumnsDirective>
      <Inject services={[DetailRow]} />
    </GridComponent>
  </div>)
};
export default App;


