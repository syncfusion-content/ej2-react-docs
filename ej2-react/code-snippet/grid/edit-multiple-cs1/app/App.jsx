import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const selectOptions = { type: 'Multiple' };
  const orderIDRules = { required: true };
  const customerIDRules = { required: true, minLength: 3 };
  const freightIDRules = { required: true, min: 1, max: 1000 };
  const deleteClick = () => {
    const selectedRows = grid.getSelectedRows();
    selectedRows.forEach((row) => {
      grid.deleteRow(row);
    });
  }
  return (<div>
    <ButtonComponent id='delete' onClick={deleteClick}>Delete Multiple</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} height={265} selectionSettings={selectOptions}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' defaultValue='HANAR' validationRules={customerIDRules} headerText='Customer ID' width='120' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" defaultValue='1' editType='numericedit' textAlign="Right" validationRules={freightIDRules} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' defaultValue='France' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit]} />
    </GridComponent></div>)
};
export default App;