

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
      return <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
      <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' allowEditing='false'/>
          <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType= 'numericedit' textAlign="Right"/>
          <ColumnDirective field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width='150'/>
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent>
};
export default App;


