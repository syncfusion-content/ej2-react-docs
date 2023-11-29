

import { Column, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Toolbar, ToolbarItems, PrintEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const toolbar = ['Print'];
    let grid;
    const pageOptions = { pageSize: 6 };
    const toolbarClick = (args) => {
        if (args.item.text === 'Print') {
            for (const column of (grid.columns)) {
                if (column.field === "CustomerID") {
                    column.visible = true;
                }
                else if (column.field === "ShipCity") {
                    column.visible = false;
                }
            }
        }
    }
    const printComplete = () => {
        for (const column of (grid.columns)) {
            if (column.field === "CustomerID") {
                column.visible = false;
            }
            else if (column.field === "ShipCity") {
                column.visible = true;
            }
        }
    }
    return (<GridComponent ref={g => grid = g} dataSource={data} toolbar={toolbar}
        allowPaging={true} pageSettings={pageOptions} toolbarClick={toolbarClick}
        printComplete={printComplete}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' visible={false} width='150' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, Page]} />
    </GridComponent >)
};
export default App;


