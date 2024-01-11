import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const filterOptions = {
    type: 'Excel',
    columns: [
      {
        field: 'CustomerID',
        matchCase: false,
        operator: 'startswith',
        predicate: 'or',
        value: 'VINET',
      },
      {
        field: 'CustomerID',
        matchCase: false,
        operator: 'startswith',
        predicate: 'or',
        value: 'HANAR',
      },
      {
        field: 'OrderID',
        matchCase: false,
        operator: 'lessThan',
        predicate: 'or',
        value: 10250,
      },
      {
        field: 'OrderID',
        matchCase: false,
        operator: 'notEqual',
        predicate: 'or',
        value: 10262,
      },
    ]
  };
  return <GridComponent dataSource={data} filterSettings={filterOptions} allowFiltering={true} height={315} >
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
    </ColumnsDirective>
    <Inject services={[Filter]} />
  </GridComponent>
};
export default App;