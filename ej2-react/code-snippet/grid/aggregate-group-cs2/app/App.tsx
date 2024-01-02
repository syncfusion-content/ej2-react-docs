

import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Aggregate, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const groupOptions: GroupSettingsModel = {
    columns: ['ShipCountry'],
    showDropArea: false
  };
  const captionTemplate = (props) => {
    return (<span>Max: {props.Max}</span>)
  }
  return (<GridComponent dataSource={data} allowGrouping={true}
    groupSettings={groupOptions} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='OrderDate' headerText='OrderDate' format='yMd' type='date' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' format='C2' width='150' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Max' groupCaptionTemplate={captionTemplate} />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[Aggregate, Group]} />
  </GridComponent>)
}
export default App;


