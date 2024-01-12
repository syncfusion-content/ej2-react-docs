import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const selectionOptions = { type: 'Multiple', enableSimpleMultiRowSelection: true };
    const toolbar = ['PdfExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_pdfexport') {
            const selectedRecords = grid.getSelectedRecords();
            const exportProperties = {
                dataSource: selectedRecords
            };
            grid.pdfExport(exportProperties);
        }
    }
    return (<GridComponent id='Grid' dataSource={data} allowPaging={true} allowPdfExport={true} toolbar={toolbar}
        selectionSettings={selectionOptions} toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, PdfExport]} />
    </GridComponent>)
};
export default App;