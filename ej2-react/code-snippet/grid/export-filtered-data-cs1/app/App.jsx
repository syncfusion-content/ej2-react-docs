import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page, Toolbar, ExcelExport } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const selectionOptions = { type: 'Multiple', enableSimpleMultiRowSelection: true };
    const toolbar = ['ExcelExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_excelexport') {
            const selectedRecords = grid.getSelectedRecords();
            const exportProperties = {
                dataSource: selectedRecords
            };
            grid.excelExport(exportProperties);
        }
    }
    return (<GridComponent id='Grid' dataSource={data} allowPaging={true} allowExcelExport={true} toolbar={toolbar} selectionSettings={selectionOptions} toolbarClick={toolbarClick}
        ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right" />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, ExcelExport]} />
    </GridComponent>)
};
export default App;