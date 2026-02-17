import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const dateTemplate = ((props) => {
        const date = new Date(props.OrderDate);
        const day = date.getDate();
        const month = date.toLocaleDateString('default', { month: 'short' });
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    })
    return (
        <div>
            <GridComponent dataSource={data} height={315}  >
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C2' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' template={dateTemplate} />
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' />
                </ColumnsDirective>
            </GridComponent>
        </div>
    )
}
export default App;
