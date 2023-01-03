import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Aggregate, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const custom = (props) => {
        return (<span>Custom: {props.Custom}</span>);
    };
    const customAggregateFn = (args) => {
        const val = args.result.filter((item) => item.ShipCountry === 'Brazil').length;
        return val;
    };
    return (<GridComponent dataSource={data} allowPaging={true} height={268}>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='Freight' headerText='Freight' format='C2' width='150'/>
                <ColumnDirective field='ShipCountry' headerText='Ship Name' width='150'/>
            </ColumnsDirective>
            <AggregatesDirective>
              <AggregateDirective>
                <AggregateColumnsDirective>
                  <AggregateColumnDirective field='ShipCountry' type='Custom' customAggregate={customAggregateFn} footerTemplate={custom}/>
                </AggregateColumnsDirective>
              </AggregateDirective>
            </AggregatesDirective>
            <Inject services={[Page, Aggregate]}/>
        </GridComponent>);
}
export default App;
