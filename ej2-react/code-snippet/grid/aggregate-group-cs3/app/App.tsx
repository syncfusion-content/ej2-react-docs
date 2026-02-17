import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Aggregate, Group, GroupSettingsModel, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const groupOptions: GroupSettingsModel = {
    columns: ['ShipCountry'],
    showDropArea: false,
    disablePageWiseAggregates: true
  };
  const pageOptions: PageSettingsModel = { pageSize: 5 };
  const groupCaptionTemplate = (props) => {
    return (<span>Max: {props.Max}</span>)
  }
  const groupFooterTemplate = (props) => {
    return (<span>Sum: {props.Sum}</span>)
  }
  const footerTemplate = (props) => {
    return (<span>Sum: {props.Sum}</span>)
  }
  return (<GridComponent dataSource={data} allowPaging={true} pageSettings={pageOptions} allowGrouping={true}
    groupSettings={groupOptions} height={260}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' textAlign='Right'  type='date' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' width='150' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Sum' groupFooterTemplate={groupFooterTemplate} />
        </AggregateColumnsDirective>
      </AggregateDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Max' groupCaptionTemplate={groupCaptionTemplate} />
        </AggregateColumnsDirective>
      </AggregateDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Sum' footerTemplate={footerTemplate} />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[Page, Aggregate, Group]} />
  </GridComponent>)
}
export default App;