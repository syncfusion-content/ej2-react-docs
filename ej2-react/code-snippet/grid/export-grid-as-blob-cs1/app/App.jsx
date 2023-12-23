import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbar = ['PdfExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_pdfexport') {
            // pass fourth parameter as true to get the blob data of exported grid
            grid.pdfExport(null, null, null, true);
        }
    }
    const pdfExportComplete = (args) => {
        // execute the promise to get the blob data
        args.promise.then((e) => {
            console.log(e.blobData);
        });
    }

    return (
        <div>
            <GridComponent id='grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
                toolbarClick={toolbarClick} pdfExportComplete={pdfExportComplete} ref={g => grid = g} allowPaging={true}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                    <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                </ColumnsDirective>
                <Inject services={[Toolbar, PdfExport, Page]} />
            </GridComponent>
        </div>
    );
}
export default App;
