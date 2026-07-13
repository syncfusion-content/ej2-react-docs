import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { inventoryStoreData } from './datasource';

function App() {
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true };
  const toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'];
  const idRules = { required: true };
  const unitPriceRules = { required: true, min: 1 };
  const dropdownEditParams = { params: { showSpinButton: false } };
  return <GridComponent dataSource={inventoryStoreData} editSettings={editOptions} allowPaging={true} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='ID' headerText='ID' width='120' textAlign="Right" isPrimaryKey={true} validationRules={idRules} />
      <ColumnDirective field='Product' headerText='Product Name' width='180' editType='dropdownedit' edit={{ params: { popupHeight: '200px' } }} />
      <ColumnDirective field='VendorA' headerText='Vendor A (units)' width='160' textAlign='Right' editType='numericedit' edit={dropdownEditParams} />
      <ColumnDirective field='VendorB' headerText='Vendor B (units)' width='160' textAlign='Right' editType='numericedit' edit={dropdownEditParams} />
      <ColumnDirective field='VendorC' headerText='Vendor C (units)' width='160' textAlign='Right' editType='numericedit' edit={dropdownEditParams} />
      <ColumnDirective field='VendorD' headerText='Vendor D (units)' width='160' textAlign='Right' editType='numericedit' edit={dropdownEditParams} />
      <ColumnDirective field='UnitPrice' headerText='Price (per unit)' width='160' textAlign='Right' format='C2' editType='numericedit' edit={dropdownEditParams} validationRules={unitPriceRules} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]} />
  </GridComponent>
}
export default App;
