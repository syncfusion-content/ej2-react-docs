import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const pageOptions = { pageSizes: ["5", "10", "All"] };
    return <GridComponent dataSource={data} allowPaging={true} pageSettings={pageOptions} height={273}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right"/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
    </ColumnsDirective>
    <Inject services={[Page]}/>
  </GridComponent>;
}
;
export default App;
