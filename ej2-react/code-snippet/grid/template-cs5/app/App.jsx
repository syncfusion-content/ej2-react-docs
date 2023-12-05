import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const formatCurrency = ((value) => {
    return '₹ ' + value.toFixed(3);
  });
  const currencyTemplate = ((props) => {
    return (
      <div>
        {formatCurrency(props.Freight)}
      </div>
    )
  })
  return (
    <div>
      <GridComponent dataSource={data} height={315} enableHover={false}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
          <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' textAlign='Right' format='C2' width='90' template={currencyTemplate} />
          <ColumnDirective field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width='120' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;