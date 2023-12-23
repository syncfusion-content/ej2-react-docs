import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const toolbarOptions = ['Add', 'Edit', 'Delete'];
  const orderIDrules = { required: true, number: true };
  const customerIDrules = { required: true };
  const freightrules =  { min:1,max:1000 };
  const actionComplete = (args) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      const dialogInstance = args.dialog;
      dialogInstance.buttons = [
        {
            buttonModel: { content: 'Discard', cssClass: 'e-primary custom-button-style'  }, 
            click: () => {
              grid .editModule.closeEdit();
            }
          },
        {
          buttonModel: { content: 'Submit', cssClass: 'e-success custom-button-style' },
          click: () => {
            grid.editModule.endEdit();
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


