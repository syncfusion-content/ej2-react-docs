import { ColumnDirective, ColumnsDirective, GridComponent, Inject, SelectionSettingsModel, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const selectionSettings: SelectionSettingsModel = { checkboxOnly: true };
    return (<div>
        <GridComponent dataSource={data} height={300} selectionSettings={selectionSettings} allowPaging={true} >
            <ColumnsDirective>
                <ColumnDirective type='checkbox' width='50' />
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign="Right" />
                <ColumnDirective field='Freight' headerText='Freight' width='150' textAlign="Right" />
                <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='100' format='yMd' textAlign="Right" />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
            </ColumnsDirective>
            <Inject services={[Page]} />
        </GridComponent></div>)
};
export default App;