

import { getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Aggregate, Column, ForeignKey, getForeignData, Grid } from '@syncfusion/ej2-react-grids';
import { AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
  let grid: Grid | null;
  const custom = (props: any): any => {
    return (<span>Count of Margaret: {props.Custom}</span>)
  }
  // Custom Aggregate function for foreign column
  const customAggregateFn = (args: any, column: Column) => {
    const proxy: Grid = grid as Grid;
    return args.result.filter((dObj: object) => {
      return getValue('FirstName',
        getForeignData(proxy.getColumnByField(column.field), dObj)[0]) === 'Margaret';
    }).length;
  };
  return <GridComponent dataSource={data} height={280} ref={g => grid = g}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' />
      <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID'
        dataSource={employeeData} headerText='Employee Name' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='EmployeeID' type='Custom'
            customAggregate={customAggregateFn} footerTemplate={custom} />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[ForeignKey, Aggregate]} />
  </GridComponent>
};
export default App;


