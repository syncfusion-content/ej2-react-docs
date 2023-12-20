import { ColumnDirective, ColumnsDirective, GridComponent, QueryCellInfoEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const customizeCell = (args: QueryCellInfoEventArgs) => {
    if (args.column.field === "Freight") {
      if (args.data[args.column.field] <= 30) {
        args.cell.classList.add('below-30');
      } else if (args.data[args.column.field] > 30 && args.data[args.column.field] < 80) {
        args.cell.classList.add('below-80');
      } else {
        args.cell.classList.add('above-80');
      }
    }
  }
  return (<div>
    <GridComponent dataSource={data} height={315} enableHover={false} allowSelection={false}
      queryCellInfo={customizeCell}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" headerText="Order ID" width="100" textAlign="Right" />
        <ColumnDirective field="CustomerID" headerText="Customer ID" width="100" />
        <ColumnDirective field="EmployeeID" headerText="Employee ID" width="100" textAlign="Right" />
        <ColumnDirective field="Freight" headerText="Freight" width="80" textAlign="Right" format="C2" />
        <ColumnDirective field="ShipCountry" headerText="Ship Country" width="100" />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;


