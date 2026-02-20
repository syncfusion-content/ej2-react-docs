import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const selectOptions: SelectionSettingsModel = {
    type: 'Multiple',
    mode: 'Cell'
  }
  return (
    <div>
      <div>
        <GridComponent dataSource={data} height={355} selectionSettings={selectOptions}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='OrderID' width='100' textAlign='Right'/>
            <ColumnDirective field='CustomerID' headerText='CustomerID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign='Right'/>
            <ColumnDirective field='ShipCountry' headerText='ShipCountry' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
