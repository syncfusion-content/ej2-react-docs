import { CheckBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, EditEventArgs, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { FormValidator } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let checkBox: CheckBoxComponent | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const freightRules: object = { min: 1, max: 1000 };
  let formObj: FormValidator | undefined;
  const onActionComplete = (args: EditEventArgs) => {
    if (grid) {
      formObj = (grid as GridComponent).editModule.formObj;
      const customerIDRules = {
        required: true,
        minLength: [5, 'Customer ID should have a minimum length of 5 characters'],
      };

      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        if ((checkBox as CheckBoxComponent).checked) {
          // Add the custom validation rule
          formObj.addRules('CustomerID', customerIDRules);
        }
      } else if (args.requestType === 'save' || args.requestType === 'cancel') {
        formObj = undefined;
      }
    }
  }
  const checkboxChange = (args: ChangeEventArgs) => {
    if (formObj) {
      // two way binding react dynamic grid form validator rule add/remove configuration
      if (args.checked) {
        // Add the custom validation rule
        formObj.addRules('CustomerID', {
          required: true,
          minLength: [5, 'Customer ID should have a minimum length of 5 characters'],
        });
        formObj.validate();
      } else {
        // Remove the custom validation rule
        formObj.removeRules('CustomerID', ['required', 'minLength']);
        // Add a temporary (dummy) rule to force revalidation.
        // When rules are removed from an already validated field, the error message
        // is not cleared automatically. This dummy rule triggers validation again
        // so the field passes, removes the error element, and is then removed.
        formObj.addRules('CustomerID', {required: false});
        formObj.validate();
        // Remove dummy validation rule after validate
        formObj.removeRules('CustomerID', ['required']);
      }
    }
  }
  return (<div>
    <div>
      <CheckBoxComponent ref={c => checkBox = c} label='Enable/Disable validation rule for customerID column' checked={true} change={checkboxChange}></CheckBoxComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions}
      toolbar={toolbarOptions} height={315} actionComplete={onActionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightRules} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;