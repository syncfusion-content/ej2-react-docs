import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { productData } from './datasource';
function App() {
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const orderIDRules: object = { required: true };
  const productNameRules: object = { required: true };
  const unitIDRules: object = { required: true, min: 1 };
  const stockIDRules: object = { required: true, min: 1 };
  const calculateTotalCost = () => {
    const formEle = (grid as GridComponent).element.querySelector('form').ej2_instances[0];
    formEle.getInputElement('TotalCost').value = formEle.getInputElement('UnitPrice').value * formEle.getInputElement('UnitsInStock').value;
  }
  const toolbar: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const priceParams = { params: { change: calculateTotalCost } };
  const stockParams = { params: { change: calculateTotalCost } };

  return <GridComponent ref={g => grid = g} dataSource={productData} editSettings={editOptions} toolbar={toolbar} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='ProductID' headerText='ProductID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='ProductName' validationRules={productNameRules} headerText='ProductName' width='120' />
      <ColumnDirective field='UnitPrice' headerText='UnitPrice' width='120' editType="numericedit" format='C' edit={priceParams} textAlign="Right" validationRules={unitIDRules} />
      <ColumnDirective field='UnitsInStock' headerText='UnitsInStock' editType='numericedit' validationRules={stockIDRules} edit={stockParams} width='150' />
      <ColumnDirective field='TotalCost' headerText='TotalCost' width='150' allowEditing={false} format='C' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>;
}
;
export default App;
