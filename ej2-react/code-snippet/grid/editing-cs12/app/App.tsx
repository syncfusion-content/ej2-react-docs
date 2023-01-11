

import { MultiSelect } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent, ColumnsDirective, ColumnDirective, IEditCell, Edit, Inject, Toolbar, Page, EditSettingsModel, ToolbarItems, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { purchaseData } from './datasource';

function App() {
  const createShipCityFn = () => {
    ddElem = document.createElement('input');
    return ddElem;
  };
  const readShipCityFn = () => {
    return multiSelectObj.value.join(',');
  };
  const destroyShipCityFn = () => {
    multiSelectObj.destroy();
  };
  const writeShipCityFn = (args) => {
    let multiSelectVal = args.rowData[args.column.field]
      ? args.rowData[args.column.field].split(',')
      : [];
    multiSelectObj = new MultiSelect({
      value: multiSelectVal,
      dataSource: multiselectDatasource,
      fields: { value: 'ShipCity', text: 'ShipCity' },
      floatLabelType: 'Never',
      mode: 'Box',
    });
    multiSelectObj.appendTo(ddElem);
  };

  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const pageOptions: PageSettingsModel = {
    pageSize: 7, pageSizes: true
  };
  let ddElem: HTMLElement;
  let multiSelectObj: MultiSelect;
  const multiselectDatasource: object = [
    { ShipCity: 'Reims', Id: '1' },
    { ShipCity: 'Münster', Id: '2' },
    { ShipCity: 'Rio de Janeiro', Id: '3' },
    { ShipCity: 'Lyon', Id: '4' },
    { ShipCity: 'Charleroi', Id: '5' },
  ];
  const ddParams: IEditCell = {
    create: createShipCityFn,
    destroy: destroyShipCityFn,
    read: readShipCityFn,
    write: writeShipCityFn,
  };
  return (<GridComponent dataSource={purchaseData} allowPaging={true} pageSettings={pageOptions} editSettings={editOptions} toolbar={toolbarOptions} height={250}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' type='number' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width='140' />
      <ColumnDirective field='Freight' headerText='Freight' type='number' format="C2" textAlign="Right" editType='numericedit' width='120' />
      <ColumnDirective field='ShipCity' headerText='Ship City' type='string' edit={ddParams} width='180' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]} />
  </GridComponent>
  );
};
export default App;


