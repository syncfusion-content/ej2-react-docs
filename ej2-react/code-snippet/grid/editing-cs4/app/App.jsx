
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Inject, Toolbar  } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  let isAddable = true;
  const orderIDRules = { required: true, number: true };
  const customerIDRules = { required: true, minLength: 3 };
  const freightIDRules = { required: true, min: 1, max: 1000 };
  const btnClick = (args) => {
    args.target.innerText == 'Grid is Addable' ? (args.target.innerText = 'Grid is Not Addable') : (args.target.innerText = 'Grid is Addable');
    isAddable = !isAddable;
  }
  const cellEdit = (args) => {
    if (args.rowData['Role'] == 'Admin') {
      args.cancel = true;
    }
  }
  const beforeBatchAdd = (args) => {
    if (!isAddable) {
      args.cancel = true;
    }
  }
  const beforeBatchDelete = (args) => {
    if (args.rowData['Role'] == 'Admin') {
      args.cancel = true;
    }
  }
  return (<div>
    <ButtonComponent onClick={btnClick}>Grid is Addable</ButtonComponent>
    <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} cellEdit={cellEdit} beforeBatchAdd={beforeBatchAdd} beforeBatchDelete={beforeBatchDelete} height={240}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' type="number" textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type="string" validationRules={customerIDRules} />
        <ColumnDirective field='Role' headerText='Role' width='120' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' editType="numericedit" format="C2" textAlign="Right" validationRules={freightIDRules} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent>
  </div>)
};
export default App;