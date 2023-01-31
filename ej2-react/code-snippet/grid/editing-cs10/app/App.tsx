

import { TimePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';
import { GridComponent, ColumnsDirective, ColumnDirective, IEditCell, Edit, Inject, Toolbar, Page, EditSettingsModel, ToolbarItems, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { purchaseData } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const pageOptions: PageSettingsModel = {
    pageSize: 7, pageSizes: true
  };
  let tpElem: HTMLElement;
  let timeObject: any;
  const createOrderDateFn = () => {
    tpElem = document.createElement('input');
    return tpElem;
  }
  const destroyOrderDateFn = () => {
    timeObject.destroy();
  }
  const readOrderDateFn = () => {
    return timeObject.value;
  }
  const writeOrderDateFn = (args) => {
    enableRipple(true);
    timeObject = new TimePicker({
      value: args.rowData[args.column.field],
      step: 60,
    });
    timeObject.appendTo(tpElem);
  }
  const datepickerTemp: IEditCell = {
    create: createOrderDateFn,
    destroy: destroyOrderDateFn,
    read: readOrderDateFn,
    write: writeOrderDateFn,
  };
  return (<GridComponent dataSource={purchaseData} allowPaging={true} pageSettings={pageOptions} editSettings={editOptions} toolbar={toolbarOptions} height={250}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' type='number' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width='140' />
      <ColumnDirective field='Freight' headerText='Freight' type='number' format="C2" textAlign="Right" editType='numericedit' width='120' />
      <ColumnDirective field='OrderDate' headerText='Order Date' type='date' format="hh:mm" edit={datepickerTemp} width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]} />
  </GridComponent>)
};
export default App;



