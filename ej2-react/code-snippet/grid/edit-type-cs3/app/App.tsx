import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Toolbar, EditSettingsModel, ToolbarItems, IEditCell  } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: Object = { required: true, number: true };
  const customerIDRules: Object = { required: true };
  const shipCountryRules: Object = { required: true };
  const countryParams: IEditCell  = {
    params: {
      allowFiltering: true
    }
  };
  return <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={273}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' isPrimaryKey={true} validationRules={orderIDRules} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={countryParams} textAlign='Right' validationRules={shipCountryRules} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;