import * as React from 'react';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { customerData} from './dataSource';

function App() {
    return (<div>
        <GridComponent dataSource={customerData.slice(0,5)} height={315}>
            <ColumnsDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='ContactName' headerText='ContactName' width='100' textAlign="Right" />
                <ColumnDirective field='Address' headerText='Address' width='80' textAlign="Right"/>
                <ColumnDirective field='Country' headerText='Country' width='100'/>
            </ColumnsDirective>
        </GridComponent>
    </div>)
};
export default App;