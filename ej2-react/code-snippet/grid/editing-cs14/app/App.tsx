

import { TextBox } from '@syncfusion/ej2-inputs';
import { GridComponent, ColumnsDirective, ColumnDirective, IEditCell, Edit, Inject, Toolbar, Page, EditSettingsModel, ToolbarItems, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { purchaseData } from './datasource';

function App() {
  let grid: Grid | null;
  let tbElem: HTMLElement;
  let textEditor: TextBox;
  const created = () => {
    grid.keyConfigs.enter = '';
  };
  const valueAccessor = (field, data, column) => {
    let value = data[field];
    if (value != undefined) {
      return value.split('\n').join('<br>');
    } else {
      return '';
    }
  };

  const createShipAddressFn = () => {
    tbElem = document.createElement('textarea');
    return tbElem;
  };
  const destroyShipAddressFn = () => {
    textEditor.destroy();
  };
  const readShipAddressFn = () => {
    return textEditor.value;
  };
  const writeShipAddressFn = (args) => {
    textEditor = new TextBox({
      multiline: true,
      value: args.rowData[args.column.field],
      floatLabelType: 'Auto',
    });
    textEditor.appendTo(tbElem);
  };

  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const pageOptions: PageSettingsModel = {
    pageSize: 7, pageSizes: true
  };

  const dpParams: IEditCell = {
    create: createShipAddressFn,
    destroy: destroyShipAddressFn,
    read: readShipAddressFn,
    write: writeShipAddressFn,
  };
  return (<GridComponent dataSource={purchaseData} allowPaging={true} allowTextWrap={true} pageSettings={pageOptions} editSettings={editOptions} toolbar={toolbarOptions} valueAccessor={valueAccessor} ref={(g) => (grid = g)} created={created} height={250}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' type='number' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width='140' />
      <ColumnDirective field='Freight' headerText='Freight' type='number' format="C2" textAlign="Right" editType='numericedit' width='120' />
      <ColumnDirective field='ShipAddress' headerText='Ship Address' type='string' disableHtmlEncode={false} valueAccessor={valueAccessor} edit={dpParams} width='180' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]} />
  </GridComponent>
  );
};
export default App;



