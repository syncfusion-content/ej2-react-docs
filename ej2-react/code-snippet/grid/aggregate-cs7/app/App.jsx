import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Aggregate, Edit, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const toolbarOptions = ['Delete', 'Update', 'Cancel'];
  const editOption = { allowEditing: true, allowDeleting: true, mode: 'Normal' };
  let selectedRecord = {};
  const actionBegin = (args) => {
    if (args.requestType === 'beginEdit') {
      selectedRecord = {};
      selectedRecord = args.rowData;
    };
  }
  const changeFn = (args) => {
    selectedRecord.Freight = args.value;
    grid.aggregateModule.refresh(selectedRecord);
  }
  let numericParams = { params: { change: changeFn } }
  const footerSum = (props) => {
    return (<span>Sum: {props.Sum}</span>)
  }
  return (<GridComponent dataSource={data} ref={g => grid = g} allowPaging={true}
    actionBegin={actionBegin} toolbar={toolbarOptions} editSettings={editOption} height={268}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='120' textAlign='Right' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='OrderDate' headerText='Order Date' width='150' format='yMd' type='date' />
      <ColumnDirective field='Freight' headerText='Freight' format='C2' edit={numericParams} editType='numericedit' width='150' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Sum' format='C2'
            footerTemplate={footerSum} />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[Page, Aggregate, Edit, Toolbar]} />
  </GridComponent>)
}
export default App;