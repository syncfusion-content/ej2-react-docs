import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, Group, Inject, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbar = ['ExcelExport'];
    const groupOptions = {
        columns: ['CustomerID', 'ShipCity']
    };
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_excelexport') {
            grid.excelExport();
        }
    };
    return (<div>
        <GridComponent id='Grid' dataSource={data} height={270} toolbar={toolbar} allowPaging={true} allowGrouping={true} allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g} groupSettings={groupOptions}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport, Group, Page]}/>
      </GridComponent>
    </div>);
}
export default App;
