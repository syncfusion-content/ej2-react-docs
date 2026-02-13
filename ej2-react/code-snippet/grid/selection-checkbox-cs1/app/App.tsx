import { ColumnDirective, ColumnsDirective, GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const selectionSettings: SelectionSettingsModel = { type: 'Multiple' };
    const headerTemplate = () => {
        return (<div></div>);
    }
    return (<div>
        <GridComponent dataSource={data} height={315} selectionSettings={selectionSettings}>
            <ColumnsDirective>
                <ColumnDirective type='checkbox' width='50' headerTemplate={headerTemplate} />
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign="Right"/>
                <ColumnDirective field='Freight' headerText='Freight' width='150' textAlign="Right" />
                <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='100' format='yMd' textAlign="Right" />
                <ColumnDirective field='ShipCountry' headerText='ShipCountry' width='150' />
            </ColumnsDirective>
        </GridComponent></div>)
};
export default App;