import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const customFn = (args) => {
    return args['value'].length >=5;
  };
  const orderIDRules = { required: true };
  const customerIDRules = {
    minLength: [customFn, 'Need atleast 5 letters'],
    required: true
  };
  const freightRules = { required: true, min: 1, max: 1000 };
  return <GridComponent dataSource={data} editSettings={editOptions}
    toolbar={toolbarOptions} height={315} >
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' defaultValue='HANAR' validationRules={customerIDRules} headerText='Customer ID' width='120' />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightRules}/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;