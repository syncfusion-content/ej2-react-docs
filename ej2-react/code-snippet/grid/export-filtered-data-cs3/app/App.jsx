import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page, PdfExport, Toolbar, Filter } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const pageOptions = { pageSize: 5, pageCount: 5 };
    const toolbar = ['PdfExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_pdfexport') {
            const filteredRecord = grid.getFilteredRecords();
            const exportProperties = {
                dataSource: filteredRecord
            };
            grid.pdfExport(exportProperties);
        }
    }
    return (<GridComponent id='Grid' dataSource={data} allowPaging={true} pageSettings={pageOptions} allowFiltering={true} allowPdfExport={true} toolbar={toolbar}
         toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Toolbar, PdfExport]} />
    </GridComponent>)
};
export default App;