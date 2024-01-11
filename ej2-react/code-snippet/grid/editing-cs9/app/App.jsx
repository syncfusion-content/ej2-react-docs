import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, Inject, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const stringParams = {
    params: {
      showClearButton: true
    }
  };
  return (<div>
    <GridComponent dataSource={data} toolbar={toolbar} height={315} editSettings={editSettings} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' edit={stringParams} />
        <ColumnDirective field='Freight' headerText='Freight' width='150' editType='numericedit' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' editType='dropdownedit' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;