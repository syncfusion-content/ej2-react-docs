import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons'
import { ColumnDirective, ColumnsDirective, EditEventArgs, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let checkBox: CheckBoxComponent | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const freightRules: object = { min: 1, max: 1000 };
  const onActionComplete = (args: EditEventArgs) => {
    if (grid) {
      const formObj = (grid as GridComponent).editModule.formObj;
      const customerIDRules = {
        required: true,
        minLength: [5, 'Customer ID should have a minimum length of 5 characters'],
      };

      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        if ((checkBox as CheckBoxComponent).checked) {
          // Add the custom validation rule
          formObj.addRules('CustomerID', customerIDRules);
        }
      }
    }
  }
  return (<div>
    <div>
      <CheckBoxComponent ref={c => checkBox = c} label='Enable/Disable validation rule for customerID coulumn' checked={true}></CheckBoxComponent>
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