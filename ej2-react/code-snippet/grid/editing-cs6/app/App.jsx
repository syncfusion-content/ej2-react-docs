import { ColumnDirective, ColumnsDirective, CommandColumn, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const editOptions = { allowEditing: true, allowDeleting: true };
    const commands = [
        { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
        { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
        { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
        { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }
    ];
    return <GridComponent dataSource={data} editSettings={editOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right"/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150'/>
      <ColumnDirective headerText='Commands' width='120' commands={commands}/>
    </ColumnsDirective>
    <Inject services={[Edit, CommandColumn]}/>
  </GridComponent>;
}
;
export default App;
