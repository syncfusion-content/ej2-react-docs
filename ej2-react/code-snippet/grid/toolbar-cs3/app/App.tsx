

import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
   const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: object[] = [
    { text: 'Add'}, { text: 'Edit'}, { text: 'Delete'}, { text: 'Update'}, { text: 'Cancel'},
    { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-click', id: 'Click' }
  ];
  const clickHandler = (args: any) => {
     if (args.item.id === 'Click') {
      alert("Custom toolbar Click...");
    }
  }
    return (<GridComponent dataSource={data} toolbar={toolbarOptions}
        toolbarClick={clickHandler} editSettings={editOptions} height={240}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
          <ColumnDirective field='CustomerID' width='100'/>
          <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
          <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
          <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[ Toolbar, Edit ]} />
    </GridComponent>)
}
export default App;


