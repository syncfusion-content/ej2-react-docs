import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Edit, EditSettingsModel, Inject, ToolbarItems, Page, Sort, Filter } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { billingData } from './datasource';

function App() {
  let grid: GridComponent | null;
  const filterSettings = { type: 'CheckBox' };
  const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
  const toolbarOptions: ToolbarItems = ['Add', 'Delete', 'Update', 'Cancel'];
  const actionComplete = (args) => {
    if (args.action === 'edit' && args.requestType === 'save' && (args.columnName === 'Quantity' || args.columnName === 'Price')) {
      const total: number = args.data.Quantity * args.data.Price;
      grid.updateCell(args.index, "Total", total);
    }
  };
  const actionBegin = (args) => {
    if (args.requestType === 'beginEdit' && args.columnName === 'Total') {
      args.cancel = true;
    }
  }

  return (<div>
    <GridComponent id="CellEdit" ref={g => grid = g} dataSource={billingData} allowPaging={true} allowSorting={true} allowFiltering={true} filterSettings={filterSettings} editSettings={editSettings} toolbar={toolbarOptions} actionComplete={actionComplete} actionBegin={actionBegin}>
      <ColumnsDirective>
        <ColumnDirective field="BillID" headerText="Bill ID" width="120" isPrimaryKey={true} validationRules={{ required: true }}/>
        <ColumnDirective field="BillDate" headerText="Bill Date" width="140" format="yMd" textAlign="Right" editType="datepickeredit" />
        <ColumnDirective field="Customer" headerText="Customer Name" width="150" validationRules={{ required: true }}/>
        <ColumnDirective field="Product" headerText="Product Name" width="150" editType='dropdownedit'/>
        <ColumnDirective field="Category" headerText="Category" width="130" editType='dropdownedit'/>
        <ColumnDirective field="Quantity" headerText="Quantity" textAlign="Right" width="100" format="N0" />
        <ColumnDirective field="Price" headerText="Price" textAlign="Right" width="100" editType="numericedit" format="C2" />
        <ColumnDirective field="Total" headerText="Total" textAlign="Right" width="120" format="C2"/>
        <ColumnDirective field="PaymentStatus" headerText="Payment Status" width="130" editType='dropdownedit' />
      </ColumnsDirective>
      <Inject services={[Toolbar, Edit, Page, Sort, Filter]} />
    </GridComponent>
  </div>);
}
export default App;