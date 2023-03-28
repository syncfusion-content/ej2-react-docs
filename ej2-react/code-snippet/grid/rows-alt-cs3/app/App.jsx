import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const rowDataBound = (args) => {
        let gridElement = document.getElementById('grid').ej2_instances[0];
        args.row.addEventListener('mouseover', function (e) {
            console.log(gridElement.getRowInfo(e.target));
        });
    };
    return <GridComponent id="grid" dataSource={data} editSettings={editOptions} rowDataBound={rowDataBound}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
      <ColumnDirective field='CustomerID' width='100'/>
      <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
      <ColumnDirective field='ShipCountry' width='100'/>
    </ColumnsDirective>
    <Inject services={[Edit]}/>
  </GridComponent>;
}
;
export default App;
