import { ColumnDirective, ColumnsDirective, CommandColumn, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const editOptions = { allowEditing: true, allowDeleting: true };
    const commands = [
        {
            buttonOption: {
                content: 'Details', cssClass: 'e-flat'
            }
        }
    ];
    const commandClick = (args) => {
        if (grid) {
            alert(JSON.stringify(args.rowData));
        }
    };
    return <GridComponent dataSource={data} editSettings={editOptions} commandClick={commandClick} height={265} ref={g => grid = g}>
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
