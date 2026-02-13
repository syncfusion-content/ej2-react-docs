import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Aggregate, Edit, Group, Page, ToolbarItems, Toolbar, GroupSettingsModel, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const toolbarOptions: ToolbarItems[] = ['Delete', 'Update', 'Cancel'];
  const editOption: EditSettingsModel = { allowEditing: true, allowDeleting: true, mode: 'Batch' };
  const groupOptions: GroupSettingsModel = { columns: ['ShipCountry'], showDropArea: false, }
  const footerSum = (props) => {
    return (<span>Sum: {props.Sum}</span>)
  }
  const groupFooterSum = (props) => {
    return (<span>Sum: {props.Sum}</span>)
  }
  const footerAvg = (props) => {
    return (<span>Max: {props.Average}</span>)
  }
  return (<GridComponent dataSource={data} allowPaging={true}
    allowGrouping={true} groupSettings={groupOptions}
    toolbar={toolbarOptions} editSettings={editOption} height={268}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='120' textAlign='Right' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' format='C2' editType='numericedit' textAlign='Right'  width='150' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Sum' format='C2'
            footerTemplate={footerSum} />
        </AggregateColumnsDirective>
      </AggregateDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Sum' format='C2'
            groupFooterTemplate={groupFooterSum} />
        </AggregateColumnsDirective>
      </AggregateDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Average' format='C2'
            groupCaptionTemplate={footerAvg} />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[Page, Aggregate, Edit, Group, Toolbar]} />
  </GridComponent>)
}
export default App;