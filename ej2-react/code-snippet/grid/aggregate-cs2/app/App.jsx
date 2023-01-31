import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Aggregate, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const footerSum = (props) => {
        return (<span>Sum: {props.Sum}</span>);
    };
    const footerMax = (props) => {
        return (<span>Maximum: {props.Max}</span>);
    };
    return (<GridComponent dataSource={data} allowPaging={true} height={268}>
            <ColumnsDirective>
              <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
              <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
              <ColumnDirective field='Freight' headerText='Freight' width='150' textAlign='Right'/>
              <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
          </ColumnsDirective>
          <AggregatesDirective>
            <AggregateDirective>
              <AggregateColumnsDirective>
                <AggregateColumnDirective field='Freight' type='Sum' footerTemplate={footerSum}/>
              </AggregateColumnsDirective>
            </AggregateDirective>
            <AggregateDirective>
              <AggregateColumnsDirective>
                <AggregateColumnDirective field='Freight' type='Max' footerTemplate={footerMax}/>
              </AggregateColumnsDirective>
            </AggregateDirective>
          </AggregatesDirective>
          <Inject services={[Page, Aggregate]}/>
      </GridComponent>);
}
export default App;
