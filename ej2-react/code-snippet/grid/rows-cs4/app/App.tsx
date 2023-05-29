

import { getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent, RowDataBoundEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const rowDataBound = (args: RowDataBoundEventArgs) => {
    if (args.row) {
      if (getValue('Freight', args.data) < 30) {
        args.row.classList.add('below-30');
      } else if (getValue('Freight', args.data) < 80) {
        args.row.classList.add('below-80');
      } else {
        args.row.classList.add('above-80');
      }
    }
  }
  return (<div>
    <GridComponent dataSource={data} height={315} enableHover={false} allowSelection={false}
      rowDataBound={rowDataBound}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
        <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;


