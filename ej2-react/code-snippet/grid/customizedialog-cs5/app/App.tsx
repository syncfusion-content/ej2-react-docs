import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, EditEventArgs } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Edit', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true, number: true };
  const customerIDRules: object = { required: true, minLength: 3 };
  const freightIDRules: object = { required: true, min: 1, max: 1000 };
  const actionBegin = (args: EditEventArgs) => {
    if (args.requestType === 'beginEdit' && args.rowData.ShipCountry === 'France') {
      args.cancel = true;
  }
  }
  return (<GridComponent dataSource={data} editSettings={editOptions} height={220} toolbar={toolbarOptions} actionBegin={actionBegin} >
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' type="number" textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type="string" validationRules={customerIDRules}/>
      <ColumnDirective field='Freight' headerText='Freight' width='120' editType="numericedit" format="C2" textAlign="Right" validationRules={freightIDRules}/>
      <ColumnDirective field='OrderDate' headerText='Order Date' width='140' editType="datetimepickeredit" format='yMd'/>
      <ColumnDirective field='ShipCountry' editType='dropdownedit' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>)
};
export default App;