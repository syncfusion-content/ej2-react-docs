import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject, Aggregate } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { DataUtil } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const footerTemplate = (props) => {
    return (<span>Distinct Count: {props.Custom}</span>)
  }
  const customAggregateFn = () => {
    const distinct = DataUtil.distinct(data, 'ShipCountry', true);
    return distinct.length;
  };
  return (<GridComponent dataSource={data} height={268}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign="Right" width='150' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='ShipCountry' type='Custom' customAggregate={customAggregateFn} footerTemplate={footerTemplate} />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[Aggregate]} />
  </GridComponent>)
}
export default App;