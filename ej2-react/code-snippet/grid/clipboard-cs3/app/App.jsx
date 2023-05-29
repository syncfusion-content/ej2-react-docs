import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
    const settings = { cellSelectionMode: 'Box', type: 'Multiple', mode: 'Cell' };
    const toolbarOptions = ['Add', 'Update', 'Cancel'];
    return <GridComponent dataSource={data} toolbar={toolbarOptions} editSettings={editOptions} selectionSettings={settings} enableAutoFill={true} height={272}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} visible={false}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
      <ColumnDirective field='ShipCountry' headerText='ShipCountry' width='150'/>
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default App;
