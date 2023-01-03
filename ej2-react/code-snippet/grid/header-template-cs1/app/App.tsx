

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const gridOTemplate = (props: any): any => {
    return (<div>
      <span className="e-icon-userlogin e-icons employee"></span> Customer ID
    </div>);
  }
  const gridDTemplate = (props: any): any => {
    return (<div>
      <span className="e-icon-calender e-icons headericon"></span> Order Date
    </div>);
  }
  return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' headerTemplate={gridOTemplate} width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='OrderDate' headerText='Order Date' width='135' headerTemplate={gridDTemplate} format='yMd' textAlign='Right' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
    </ColumnsDirective>
  </GridComponent>

};
export default App;


