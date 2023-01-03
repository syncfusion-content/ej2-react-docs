import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { GridComponent, Inject, Page, Selection } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const pageOptions = {
        pageSize: 8
    };
    const settings = { type: 'Multiple' };
    return <GridComponent dataSource={data} allowPaging={true} pageSettings={pageOptions} selectionSettings={settings} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' type='number' isPrimaryKey={true} textAlign="Right" width='100'/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width='120'/>
      <ColumnDirective field='Freight' headerText='Freight' type='number' textAlign="Right" format='C2' width='100'/>
      <ColumnDirective field='ShipName' headerText='Ship Name' type='string' width='180'/>
    </ColumnsDirective>
    <Inject services={[Page, Selection]}/>
  </GridComponent>;
}
;
export default App;
