

import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Aggregate, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {;
  const footerSum = (props) => {
    const value= props.Sum; 
    const style = { color: value > 1000 ? 'green' : 'red' }; 
    return <span style={style}>Total Freight: ${value.toFixed(2)}</span>;
  };
  return (<GridComponent dataSource={data} allowPaging={true} height={268}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' textAlign='Right' width='150' />
      <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' width='150' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <AggregatesDirective>
      <AggregateDirective>
        <AggregateColumnsDirective>
          <AggregateColumnDirective field='Freight' type='Sum' footerTemplate={footerSum} />
        </AggregateColumnsDirective>
      </AggregateDirective>
    </AggregatesDirective>
    <Inject services={[Page, Aggregate]} />
  </GridComponent>)
}
export default App;


