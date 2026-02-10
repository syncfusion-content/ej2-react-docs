import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { isNullOrUndefined } from '@syncfusion/ej2-base'

function App() {
  let grid: GridComponent | null;
  const editOptions = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    mode: 'Batch',
  };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderidrules = { required: true, number: true };
  const customeridrules = { required: true };
  const freightrules = { min: 1, max: 1000 };
  const shipCountryrules = { required: true };
  const orderDaterules = { required: true };
  const onClick = (args: React.MouseEvent) => {
    if (args.target.classList.contains('e-rowcell')) {
      (grid as GridComponent).editModule.editCell(parseInt(args.target.getAttribute('data-index')),
        (grid as GridComponent).getColumnByIndex(parseInt(args.target.getAttribute('aria-colindex')) - 1).field);
    }
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
      var closesttd = e.target.closest('td');
      if (e.keyCode === 39 && !isNullOrUndefined(closesttd.nextSibling)) {
        editACell(closesttd.nextSibling);
      }
      if (e.keyCode === 37 && !isNullOrUndefined(closesttd.previousSibling) &&
        !(grid as GridComponent).getColumnByIndex(
          parseInt(closesttd.previousSibling.getAttribute('aria-colindex')) - 1).isPrimaryKey) {
        editACell(closesttd.previousSibling);
      }
      if (e.keyCode === 40 && !isNullOrUndefined(closesttd.closest('tr').nextSibling)) {
        editACell(
          closesttd.closest('tr').nextSibling.querySelectorAll('td')[
          parseInt(closesttd.getAttribute('aria-colindex')) - 1]);
      }
      if (e.keyCode === 38 && !isNullOrUndefined(closesttd.closest('tr').previousSibling)) {
        editACell(
          closesttd.closest('tr').previousSibling.querySelectorAll('td')[
          parseInt(closesttd.getAttribute('aria-colindex')) - 1]);
      }
  };
  const editACell = (args) => {
    (grid as GridComponent).editModule.editCell(parseInt(args.getAttribute('data-index')), (grid as GridComponent).getColumnByIndex(parseInt(args.getAttribute('aria-colindex')) - 1).field);
  };
  return (<div>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} enableHover={false} toolbar={toolbarOptions} height={265} onClick={onClick} onKeyDown={onKeyDown}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderidrules} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customeridrules} />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right" validationRules={freightrules} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' validationRules={shipCountryrules} />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='150' format='yMd' validationRules={orderDaterules} editType='datepickeredit' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>);
}
;
export default App;