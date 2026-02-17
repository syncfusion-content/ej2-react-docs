import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const pageSettings = { pageSize: 5 };
  const orderIDRules = { required: true, };
  const customerIDRules = { required: true };
  const freightRules = { required: true };
  const editparams = { params: { popupHeight: '300px' } };

  const ontoolbarClick = (args) => {
    switch (args.item.id) {
      case 'add':
        grid.addRecord();
        break;
      case 'edit':
        grid.startEdit();
        break;
      case 'delete':
        grid.deleteRecord();
        break;
      case 'update':
        grid.endEdit();
        break;
      case 'cancel':
        grid.closeEdit();
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