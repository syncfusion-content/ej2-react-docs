import { ColumnDirective, ColumnsDirective, GridComponent, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const orderIDRules: object = { required: true };
    const customerIDRules: object = { required: true, minLength: 5 };
    const freightIDRules: object = {required: true, min: 1, max:1000 }
    return <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true}/>
      <ColumnDirective field='CustomerID' validationRules={customerIDRules} headerText='Customer ID' width='120'/>
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightIDRules}/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150'/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
};
export default App;