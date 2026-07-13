import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Edit, Inject, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { productDatas } from './datasource';

function App() {
  let grid: GridComponent | null;
  const editSettings = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    mode: 'Cell',
  };
  const toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
  const onClick = (args: React.MouseEvent) => {
    if (args.target.classList.contains('e-rowcell')) {
      (grid as GridComponent).editModule.editCell(parseInt(args.target.getAttribute('data-index')),
        (grid as GridComponent).getColumnByIndex(parseInt(args.target.getAttribute('aria-colindex')) - 1).field);
    }
  };
  return (
      <GridComponent dataSource={productDatas} allowPaging={true} editSettings={editSettings} toolbar={toolbarOptions} height={300} onClick={onClick}>
        <ColumnsDirective>
          <ColumnDirective field='ProductID' headerText='Product ID' isPrimaryKey={true} textAlign='Right' validationRules={{ required: true }} width='120' />
          <ColumnDirective field='ProductCategory' headerText='Product Category' validationRules={{ required: true }} width='140' />
          <ColumnDirective field='ShippingMethod' headerText='Shipping Method' editType='dropdownedit' width='140' />
          <ColumnDirective field='StockQuantity' headerText='Stock Quantity' editType='numericedit' format='N0' width='150' />
          <ColumnDirective field='Discount' headerText='Discount (%)' editType='numericedit' format='C2' width='170' />
          <ColumnDirective field='Revenue' headerText='Revenue' editType='numericedit' format='C2' width='170' />
          <ColumnDirective field='TransactionDate' headerText='Transaction Date' editType='datetimepickeredit' format='yMd' width='170' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Page]} />
      </GridComponent>
    );
}
;
export default App;