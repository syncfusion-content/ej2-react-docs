import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return (<div>
    <GridComponent dataSource={data.slice(0, 8)} height={315} rowHeight={60}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140'/>
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C"/>
        <ColumnDirective field='OrderDate' headerText='OrderDate' width='140' format='yMd'/>
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
;
export default App;
