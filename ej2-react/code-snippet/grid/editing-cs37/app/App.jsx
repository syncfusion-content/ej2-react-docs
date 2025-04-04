import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIdCustomValidation = (args) => {
    return grid.dataSource.every((data) => {
      return data['OrderID'] + '' !== args['value'] || data['OrderID'] === grid.editModule.editModule.args.rowData['OrderID']
    });
  };
  const orderIDRules = {
    required: true,
    min: [orderIdCustomValidation, 'The entered value already exists in the column OrderID. Please enter a unique value.']
  };
  const customerIDRules = {
    required: true
  };
  const freightRules = { required: true, min: 1, max: 1000 };
  
  const actionBegin = (args) => {
    if (args.requestType === 'save') {
      grid.editModule.formObj.addRules('OrderID', orderIDRules); // Add form validation rules dynamically.
      if (!grid.editModule.formObj.validate()) { // Check dynamically added validation rules.
          args.cancel = true; // Prevent adding duplicate data action.
      }
      grid.editModule.formObj.removeRules('OrderID'); // Remove form validation rules dynamically.
    }
  }
  return <GridComponent ref={(g) => grid = g } dataSource={data} editSettings={editOptions}
    toolbar={toolbarOptions} height={315} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' validationRules={customerIDRules} headerText='Customer ID' width='120' />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightRules}/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;
