import { DataManager } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Filter, Page, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const pageOptions = { pageSize: 5, pageCount: 5 };
    const toolbar = ['PdfExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_pdfexport') {
            let pdfdata = [];
            const query = grid.renderModule.data.generateQuery(); // get grid corresponding query
            for (let i = 0; i < query.queries.length; i++) {
                if (query.queries[i].fn === 'onPage') {
                    query.queries.splice(i, 1); // remove page query to get all records
                    break;
                }
            }
            new DataManager({ json: data }).executeQuery(query)
                .then((e) => {
                pdfdata = e.result; // get all filtered records
                const exportProperties = {
                    dataSource: pdfdata,
                };
                if (grid) {
                    grid.pdfExport(exportProperties);
                }
            }).catch((e) => true);
        }
    };
    return (<GridComponent id='grid' dataSource={data} allowPaging={true} allowFiltering={true} allowPdfExport={true} toolbar={toolbar} pageSettings={pageOptions} toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
          <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right"/>
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
        </ColumnsDirective>
        <Inject services={[Page, Filter, Toolbar, PdfExport]}/>
    </GridComponent>);
}
;
export default App;
