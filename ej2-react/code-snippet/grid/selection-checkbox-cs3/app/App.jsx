import { ColumnDirective, ColumnsDirective, GridComponent, Inject, SelectionSettingsModel, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const selectionSettings = { checkboxOnly: true };
    return (<div>
        <GridComponent dataSource={data} height={315} selectionSettings={selectionSettings} allowPaging={true} >
            <ColumnsDirective>
                <ColumnDirective type='checkbox' width='50' />
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' />
                <ColumnDirective field='Freight' headerText='Freight' width='150' />
                <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='100' format='yMd' />
                <ColumnDirective field='ShipCountry' headerText='ShipCountry' width='150' />
            </ColumnsDirective>
            <Inject services={[Page]} />
        </GridComponent></div>)
};
export default App;