import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const formatOption = { type: 'date', format: 'dd/MM/yyyy' };
    const shipFormat = { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' };
    return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
      <ColumnDirective field='OrderDate' width='140' textAlign="Right" format={formatOption}/>
      <ColumnDirective field='OrderDate' headerText='Ship Date' width='180' textAlign="Right" format={shipFormat}/>
    </ColumnsDirective>
  </GridComponent>;
}
;
export default App;
