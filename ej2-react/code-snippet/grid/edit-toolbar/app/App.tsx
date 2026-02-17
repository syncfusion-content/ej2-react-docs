import { ClickEventArgs, ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const pageSettings: PageSettingsModel = { pageSize: 5 };
  const orderIDRules: object = { required: true, };
  const customerIDRules: object = { required: true };
  const freightRules: object = { required: true };
  const editparams: object = { params: { popupHeight: '300px' } };

  const ontoolbarClick = (args: ClickEventArgs) => {
    switch (args.item.id) {
      case 'add':
        (grid as GridComponent).addRecord();
        break;
      case 'edit':
        (grid as GridComponent).startEdit();
        break;
      case 'delete':
        (grid as GridComponent).deleteRecord();
        break;
      case 'update':
        (grid as GridComponent).endEdit();
        break;
      case 'cancel':
        (grid as GridComponent).closeEdit();
        break;
    }
  }
  return (<div>
    <div>
      <ToolbarComponent clicked={ontoolbarClick}>
        <ItemsDirective>
          <ItemDirective text="Add" id="add"></ItemDirective>
          <ItemDirective text="Edit" id="edit"></ItemDirective>
          <ItemDirective text="Delete" id="delete"></ItemDirective>
          <ItemDirective text="Update" id="update"></ItemDirective>
          <ItemDirective text="Cancel" id="cancel"></ItemDirective>
        </ItemsDirective>
      </ToolbarComponent>
    </div>
    <GridComponent id='Grid' ref={g => grid = g} dataSource={data} editSettings={editOptions}
      height={268} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' editType='numericedit' validationRules={freightRules} />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='150' format='yMd' editType='datepickeredit' />
        <ColumnDirective field='ShipCountry' headerText='Order Date' width='150' format='yMd' editType='dropdownedit' edit={editparams} />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;