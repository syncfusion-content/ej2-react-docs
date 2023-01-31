import { DataManager } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort, Filter } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
function App() {
    const data = new DataManager({
        url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/'
    });
    return <GridComponent dataSource={data} allowPaging={true} pageSettings={{ pageCount: 3 }} height={315} allowFiltering={true} allowSorting={true} loadingIndicator={{ indicatorType: 'Shimmer' }}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
    </ColumnsDirective>
    <Inject services={[Page, Sort, Filter]}/>
  </GridComponent>;
}
;
export default App;
