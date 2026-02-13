import { ColumnDirective, ColumnsDirective, GridComponent, Inject, SelectionSettingsModel, Page, RowSelectingEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid
    const selectionSettings = { type: 'Single', checkboxMode: 'ResetOnRowClick' };
    const rowSelecting = (args) => {
        if (args.target && args.target.classList.contains('e-icons')) {
            grid.clearSelection();
        }
    }
    return (<div>
        <GridComponent ref={g => grid = g} dataSource={data} height={315} selectionSettings={selectionSettings} allowPaging={true} rowSelecting={rowSelecting}>
            <ColumnsDirective>
                <ColumnDirective type='checkbox' width='50' />
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign="Right" />
                <ColumnDirective field='Freight' headerText='Freight' width='150' textAlign="Right" />
                <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='100' format='yMd' textAlign="Right" />
                <ColumnDirective field='ShipCountry' headerText='ShipCountry' width='150' />
            </ColumnsDirective>
            <Inject services={[Page]} />
        </GridComponent></div>)
};
export default App;