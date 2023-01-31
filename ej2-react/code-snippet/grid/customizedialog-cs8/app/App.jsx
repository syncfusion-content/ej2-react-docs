import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    const load = () => {
        let gridElement = document.getElementById('grid').ej2_instances[0];
        if (gridElement) {
            gridElement.element.addEventListener('keydown', function (e) {
                if (gridElement && e.keyCode === 13) {
                    gridElement.addRecord();
                }
            });
        }
    };
    return <GridComponent id="grid" dataSource={data} load={load} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
      <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' editType='numericedit'/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default App;
