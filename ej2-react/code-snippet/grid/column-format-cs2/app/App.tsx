import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const numberFormatOptions: Object = {
        // Custom format for numeric columns
        format: '##.0000'
    }
    const dateFormatOptions: Object = {
        // Custom format for date columns
        type: 'Date',
        format: "EEE, MMM d, ''yy",
    }
    return <GridComponent dataSource={data} height={315}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' textAlign="Right" />
            <ColumnDirective field='Freight' headerText='Freight' width='100' format={numberFormatOptions} textAlign="Right" />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='140' textAlign="Right" format={dateFormatOptions} />
        </ColumnsDirective>
    </GridComponent>
}
export default App;