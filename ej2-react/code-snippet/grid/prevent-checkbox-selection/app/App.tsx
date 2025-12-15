import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Selection, Filter, Toolbar, Edit,
  Sort, EditSettingsModel, ToolbarItems, ColumnModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { ordersTrackData, OrderTrackModel } from './datasource';

function App() {
  const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: false, allowDeleting: false };
  const orderIDRules: object = { required: true };
  const customerNameRules: object = { required: true };
  const amountRules: object = { required: true };
  const toolbarSettings: ToolbarItems[] = ['Edit', 'Update', 'Cancel'];
  const selectionSettings = { persistSelection: true };
  const filterSettings = { type: 'Excel' };
  const isRowSelectable = (data: OrderTrackModel, columns: ColumnModel[]) =>{
    return data.Status !== 'Cancelled';
  }
  return (<div>
    <GridComponent dataSource={ordersTrackData} allowPaging={true} editSettings={editSettings} toolbar={toolbarSettings} allowSelection={true}
        allowFiltering={true} filterSettings={filterSettings} allowSorting={true} isRowSelectable={isRowSelectable} selectionSettings={selectionSettings}>
      <Inject services={[Page, Sort, Selection, Filter, Toolbar, Edit ]} />
      <ColumnsDirective>
        <ColumnDirective type='checkbox' width='50' ></ColumnDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey='true' validationRules={orderIDRules} textAlign='Right' width='110' ></ColumnDirective>
        <ColumnDirective field='CustomerName' headerText='Customer Name' validationRules={customerNameRules} width='120' ></ColumnDirective>
        <ColumnDirective field='Product' headerText='Product' editType= 'dropdownedit' width='110' ></ColumnDirective>
        <ColumnDirective field='Amount' headerText='Amount' validationRules={amountRules} format='C2' textAlign='Right' width='110' ></ColumnDirective>
        <ColumnDirective field='OrderDate' headerText='Order Date'  editType= 'datepickeredit' format='yMd' textAlign='Right' width='110' ></ColumnDirective>
        <ColumnDirective field='Status' headerText='Order Status' editType= 'dropdownedit' width='110' ></ColumnDirective>
      </ColumnsDirective>
    </GridComponent></div>)
}
export default App;


