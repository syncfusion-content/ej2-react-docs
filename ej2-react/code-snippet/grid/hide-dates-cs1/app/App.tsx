import { ColumnDirective, ColumnsDirective, Grid, GridComponent,Inject, Page, Toolbar, Edit} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true};
  function actionBegin(args) {
   if (args.requestType === 'beginEdit') {
      let minDate = args.rowData['OrderDate'];
      grid.columns.forEach((column) => {
        if (column.field === 'OrderDate') {
          column.edit.params = { min: minDate };
        }
      });
    }
  }
  return <div>
    <GridComponent dataSource={data} height={260} ref={g => grid = g} toolbar={toolbarOptions} editSettings={editSettings} allowPaging={true} pageSettings={{ pageCount: 5 }} actionBegin={actionBegin.bind(this)}>
      <ColumnsDirective>
        <ColumnDirective field="OrderID" headerText="Order ID" width="120" isPrimaryKey={true} textAlign="Right"></ColumnDirective>
        <ColumnDirective field="CustomerID" headerText="Customer Name" width="150"></ColumnDirective>
        <ColumnDirective field="OrderDate" headerText="Order Date" width="130" format="yMd" editType="datepickeredit"/>
        <ColumnDirective field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"/>
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, Edit]} />
    </GridComponent>
    </div>
};
export default App;