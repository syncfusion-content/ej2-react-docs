import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, showConfirmDialog: false, mode: 'Batch' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Delete'];
  const orderIDRules: object = { required: true, number: true };
  const customerIDRules: object = { required: true, minLength: 3 };
  const freightIDRules: object = { required: true, min: 1, max: 1000 };
  const editparams = { params: { popupHeight: '300px' } };
  const formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
  const save = () => {
    (grid as GridComponent).editModule.batchSave();
  }
  return <GridComponent ref={g => grid = g} dataSource={data} cellSaved={save} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' type="number" textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type="string" validationRules={customerIDRules} />
      <ColumnDirective field='Freight' headerText='Freight' width='120' editType="numericedit" format="C2" textAlign="Right" validationRules={freightIDRules} />
      <ColumnDirective field='OrderDate' headerText='Order Date' width='140' editType="datetimepickeredit" format={formatoptions} />
      <ColumnDirective field='ShipCountry' editType='dropdownedit' headerText='Ship Country' width='150' edit={editparams} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
}
export default App;


