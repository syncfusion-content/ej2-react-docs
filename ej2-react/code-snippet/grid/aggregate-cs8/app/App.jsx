import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Group, Inject } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Aggregate } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
  const groupSettings = { showDropArea: false, columns: ['ShipCountry'] };
  const freightTemplate = (props) => {
    return (<span>Max: {props.Max}</span>)
  }
  const shippedDateTemplate = (props) => {
    return (<span>Max: {(new Date(props.Max)).toLocaleDateString()}</span>)
  }
  const orderDateTemplate = (props) => {
    return (<span>Min:{(new Date(props.Min)).toLocaleDateString()}</span>)
  }
  const verifiedTemplate = (props) => {
    return (<span>TrueCount: {props.TrueCount}</span>)
  }
  return (<GridComponent dataSource={data} height={315} allowGrouping={true} groupSettings={groupSettings}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='OrderDate' headerText='Order Date' type='date' width='150' format='yMd' />
      <ColumnDirective field='ShippedDate' headerText='ShippedDate' type='date' width='150' format='yMd' />
      <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
      <ColumnDirective field='isVerified' headerText='Verified' width='150' type='boolean' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Max' format='C2' footerTemplate={freightTemplate} />
          <AggregateColumnDirective field='ShippedDate' type='Max' footerTemplate={shippedDateTemplate} />
          <AggregateColumnDirective field='OrderDate' type='Min' footerTemplate={orderDateTemplate} />
          <AggregateColumnDirective field='isVerified' type='TrueCount' footerTemplate={verifiedTemplate} />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[Aggregate, Group]} />
  </GridComponent>)
}
export default App;