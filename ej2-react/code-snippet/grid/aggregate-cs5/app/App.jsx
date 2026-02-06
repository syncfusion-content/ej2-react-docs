import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Aggregate, Group, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
  const groupOptions = {
    columns: ['ShipCountry'],
    showDropArea: false
  };
  const footerSum = (props) => {
    return (<span>Sum: {props.Sum}</span>);
  };
  const footerMax = (props) => {
    return (<span>Max: {props.Max}</span>);
  };
  return (<GridComponent dataSource={data} allowPaging={true} allowGrouping={true} groupSettings={groupOptions} height={268}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='OrderDate' headerText='OrderDate' format='yMd' textAlign='Right' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' width='150' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Sum' format='C2' groupFooterTemplate={footerSum} />
        </AggregateColumnsDirective>
      </AggregateDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Max' format='C2' groupCaptionTemplate={footerMax} />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[Page, Aggregate, Group]} />
  </GridComponent>);
}
export default App;
