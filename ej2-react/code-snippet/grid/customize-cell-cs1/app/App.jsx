import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const selectOptions = {
    type: 'Multiple',
    mode: 'Cell'
  }
  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} selectionSettings={selectOptions}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='OrderID' width='100' textAlign='Right'/>
            <ColumnDirective field='CustomerID' headerText='CustomerID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign='Right'/>
            <ColumnDirective field='ShipCountry' headerText='ShipCountry' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
