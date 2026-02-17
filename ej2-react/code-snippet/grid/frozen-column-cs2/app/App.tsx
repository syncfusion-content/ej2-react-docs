import { ColumnDirective, ColumnsDirective, Freeze, Grid, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: Grid | null;
    const field: any = { text: 'text', value: 'value' };
    const ddlData: any = [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'OrderDate', value: 'OrderDate' },
        { text: 'ShipName', value: 'ShipName' },
        { text: 'ShipCity', value: 'ShipCity' },
        { text: 'ShipCountry', value: 'ShipCountry' },
        { text: 'ShipRegion', value: 'ShipRegion' },
        { text: 'ShipAddress', value: 'ShipAddress' },
        { text: 'Freight', value: 'Freight' },
    ]
    const columnChange = ((args: ChangeEventArgs) => {
        const selectedColumn = (grid as any).getColumnByField(args.value as string);
        // Iterate through all columns and unfreeze any previously frozen columns
        ((grid as any).columns).forEach((column: any) => {
            if (column.isFrozen) {
                column.isFrozen = false;
            }
        });
        // Freeze the newly selected column, if it exists
        if (selectedColumn) {
            selectedColumn.isFrozen = true;
        }
        // Refresh the columns
        (grid as any).refreshColumns();
    })
    return (
        <div>
            <label style={{ padding: '30px 17px 0 0' }}>Change the frozen column:</label>
            <DropDownListComponent id='dropdown' index={0} width={150} fields={field} dataSource={ddlData} change={columnChange}></DropDownListComponent>
            <GridComponent dataSource={data} height={268} ref={g => grid = g} >
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='150' isFrozen={true} />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
                    <ColumnDirective field='Freight' headerText='Freight' width='120' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
                    <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
                    <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
                </ColumnsDirective>
                <Inject services={[Freeze]} />
            </GridComponent></div>)
}
export default App;