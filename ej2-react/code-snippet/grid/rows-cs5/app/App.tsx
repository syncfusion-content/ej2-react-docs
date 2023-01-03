

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Grid, Page, Edit, EditSettingsModel } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const addRow = () => {
      let instance = (document.getElementById('Grid') as HTMLElement).ej2_instances[0];
      instance.addRecord({ OrderID: 3232, CustomerID: 'ALKIT', EmployeeID: 6, Freight: 40, ShipName: 'Belgium'}, 2);
  }
    return (<div><ButtonComponent onClick= { addRow }>Add Row</ButtonComponent>
    <GridComponent id="Grid" dataSource={data} allowPaging={true} editSettings={editOptions}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right" isPrimaryKey={true}/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipName' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit]} />
    </GridComponent></div>)
  
}
export default App;


