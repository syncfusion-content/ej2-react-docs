

import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject, Aggregate } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const footerSum = (props) => {
    return(<span>Sum: {props.Sum}</span>)
  }
  const footerMax = (props) => {
    return(<span>Max: {props.Max}</span>)
  }
  return <GridComponent  dataSource={data} height={268}>
            <ColumnsDirective>
              <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
              <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
              <ColumnDirective field='Freight' headerText='Freight' width='150'/>
              <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
          </ColumnsDirective>
          <AggregatesDirective>
            <AggregateDirective>
              <AggregateColumnsDirective>
                <AggregateColumnDirective field='Freight' type='Sum' format='N0' footerTemplate={footerSum} />
              </AggregateColumnsDirective>
            </AggregateDirective>
            <AggregateDirective>
              <AggregateColumnsDirective>
                <AggregateColumnDirective field='Freight' type='Max' format='N0' footerTemplate={footerMax}/>
              </AggregateColumnsDirective>
            </AggregateDirective>
          </AggregatesDirective>
          <Inject services={[Aggregate]}/>
      </GridComponent>
}
export default App;


