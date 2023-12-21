

import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DialogEditEventArgs, Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { IOrderModel } from './orderModel';
import { DialogFormTemplate } from './wizardTemplate';

function App() {
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
  let grid: GridComponent | null;
  const rules: object = { required: true };
  const dialogTemplate = (props: IOrderModel) => {
    const a = [props, grid]
    return (<DialogFormTemplate {...a} />);
  }
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: dialogTemplate };
  const actionComplete = (args: DialogEditEventArgs): void => {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
      if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
        args.form.ej2_instances[0].rules = {}; // Disable deafault valdation.
        args.dialog.element.querySelector('.e-footer-content').classList.add('e-hide');
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
          ((args.form as HTMLFormElement).elements.namedItem('CustomerID') as HTMLInputElement).focus();
        }
      }
    }
  }
  return <GridComponent ref={g => grid = g} dataSource={data} actionComplete={actionComplete}
    editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={rules} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={rules} />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;