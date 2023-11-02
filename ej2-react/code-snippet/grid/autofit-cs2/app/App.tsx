import { ColumnDirective, ColumnsDirective, Grid, GridComponent, ActionEventArgs, Toolbar, Inject, ColumnChooser, Resize } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: Grid | null;
    const toolbarOptions: any = ['ColumnChooser'];
    const actionComplete = ((args: ActionEventArgs) => {
        if ((args as any).requestType === 'columnstate') {
            (grid as any).autoFitColumns();
        }
    })
    return (
        <div>
            <GridComponent dataSource={data} height={315} ref={g => grid = g} allowResizing={true} toolbar={toolbarOptions} showColumnChooser={true} actionComplete={actionComplete}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' />
                    <ColumnDirective field='Freight' headerText='Freight' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' />
                </ColumnsDirective>
                <Inject services={[Toolbar, ColumnChooser, Resize]} />
            </GridComponent></div>
    )
}
export default App;
