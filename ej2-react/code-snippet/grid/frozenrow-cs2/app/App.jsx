import { ColumnDirective, ColumnsDirective, Freeze, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  return (
    <div>
      <GridComponent dataSource={data} height={315} frozenRows={3} allowSelection={false} enableHover={false}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='150' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
          <ColumnDirective field='Freight' headerText='Freight' width='120' textAlign='Right' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
          <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Freeze]} />
      </GridComponent></div>)
}
export default App;