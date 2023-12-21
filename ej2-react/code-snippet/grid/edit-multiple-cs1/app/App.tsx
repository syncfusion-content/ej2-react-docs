import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel, Edit, EditSettingsModel, Inject, Grid } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const selectOptions: SelectionSettingsModel = { type: 'Multiple' };
  const orderIDRules: object = { required: true };
  const customerIDRules: object = { required: true, minLength: 3 };
  const freightIDRules: object = { required: true, min: 1, max: 1000 };
  const deleteClick = () => {
    const selectedRows = (grid as GridComponent).getSelectedRows();
    selectedRows.forEach((row: HTMLTableRowElement) => {
      (grid as GridComponent).deleteRow(row);
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