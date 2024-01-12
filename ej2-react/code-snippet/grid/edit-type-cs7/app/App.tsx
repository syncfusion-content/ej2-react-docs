import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, IEditCell, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: Object = { required: true, number: true };
  const customerIDRules: Object = { required: true };
  const freightRules: Object = { required: true, min: 1, max: 1000 };
  const shipCityrules: Object = { required: true };
  const orderDaterules: Object = { required: true };
  const datetimepickerparams: IEditCell = {
    params: {
      showClearButton: false,
      format: 'MM-dd-yyyy hh:mm aa',
      start: 'Year',
    }
  };
  return <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
      <ColumnDirective field='Freight' headerText='Freight' width='120' textAlign="Right" editType='numericedit' validationRules={freightRules} />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' editType='dropdownedit' validationRules={shipCityrules} />
      <ColumnDirective field='OrderDate' headerText='OrderDate' width='120' format='MM-dd-yyyy hh mm aa' editType='datetimepickeredit' edit={datetimepickerparams} validationRules={orderDaterules} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;