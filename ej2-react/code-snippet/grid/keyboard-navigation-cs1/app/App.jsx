import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const keyPressed = (args) => {
        if (args.keyCode === 13) {
            args.cancel = true;
        }
    }
    return (<div>
        <GridComponent dataSource={data} keyPressed={keyPressed}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='ShipCity' headerText='ShipCity' width='150' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
            </ColumnsDirective>
        </GridComponent></div>)
};
export default App;