

import { ColumnDirective, ColumnsDirective, EditSettingsModel, Edit, GridComponent, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
      return (<GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={270}>
          <ColumnsDirective>
              <ColumnDirective field='OrderID' width='100' textAlign="Right" isPrimaryKey={true}/>
              <ColumnDirective field='CustomerID' width='100'/>
              <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
              <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
              <ColumnDirective field='ShipCountry' width='100'/>
          </ColumnsDirective>
          <Inject services={[ Toolbar, Edit ]} />
      </GridComponent>)
}
export default App;


