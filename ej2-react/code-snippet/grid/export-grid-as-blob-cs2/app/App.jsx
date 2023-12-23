import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, ExcelExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const toolbar = ['ExcelExport', 'CsvExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_excelexport') {
            // pass fourth parameter as true to get the blob data of exported grid
            grid.excelExport(null, null, null, true);
        }
        if (args.item.id === 'Grid_csvexport') {
            // pass fourth parameter as true to get the blob data of exported grid
            this.grid.csvExport(null, null, null, true);
        }
    }
    const excelExportComplete = (args) => {
        // execute the promise to get the blob data
        args.promise.then((e) => {
            console.log(e.blobData);
        });
    }

    return (
        <div>
            <GridComponent id='grid' dataSource={data} toolbar={toolbar} allowExcelExport={true}
                toolbarClick={toolbarClick} excelExportComplete={excelExportComplete} ref={g => grid = g} allowPaging={true}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                    <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                </ColumnsDirective>
                <Inject services={[Toolbar, ExcelExport, Page]} />
            </GridComponent>
        </div>
    );
}
export default App;
