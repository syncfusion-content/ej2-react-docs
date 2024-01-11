import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, ExcelExport, GridComponent, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const toolbar = ['ExcelExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_excelexport') {
            grid.showSpinner();
            grid.excelExport();
        }
    }
    const excelExportComplete = () => {
        grid.hideSpinner();
    }
    return (<GridComponent id='Grid' dataSource={data} excelExportComplete={excelExportComplete}
        allowExcelExport={true} toolbar={toolbar} toolbarClick={toolbarClick}
        ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
            <ColumnDirective field='ProductName' headerText='ProductName' width='120' />
            <ColumnDirective field='ProductID' headerText='Product ID' width='120' />
            <ColumnDirective field='CustomerName' headerText='CustomerName' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport]} />
    </GridComponent>)
};
export default App;