import { ColumnDirective, ColumnsDirective, EditSettingsModel, Grid, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DialogEditEventArgs, Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
  const orderIDrules = { required: true, number: true };
  const customerIDrules = { required: true };
  const freightrules =  { min:1,max:1000 };
  const actionComplete = (args: DialogEditEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      const dialogInstance = args.dialog;
      dialogInstance.buttons = [
        {
            buttonModel: { content: 'Discard', cssClass: 'e-primary custom-button-style'  }, 
            click: () => {
              (grid as any).editModule.closeEdit();
            }
          },
        {
          buttonModel: { content: 'Submit', cssClass: 'e-success custom-button-style' },
          click: () => {
            (grid as any).editModule.endEdit();
          }
        }
      ];
      dialogInstance.refresh();
    }
  }
  return <GridComponent ref={g => grid = g} dataSource={data} actionComplete={actionComplete}
    editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDrules}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDrules}/>
      <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' validationRules={freightrules}/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
}
export default App;


