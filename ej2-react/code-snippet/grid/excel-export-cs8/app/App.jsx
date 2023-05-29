import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, Group, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbar = ['ExcelExport'];
    const groupOptions = {
        columns: ['CustomerID', 'ShipCity']
    };
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_excelexport') {
            grid.excelExport();
        }
    };
    return (<div>
        <GridComponent id='grid' dataSource={data} height={270} toolbar={toolbar} allowGrouping={true} allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g} groupSettings={groupOptions}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' visible={false} width='150'/>
            <ColumnDirective field='Freight' width='100' textAlign='Right'/>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, ExcelExport, Group]}/>
      </GridComponent>
    </div>);
}
export default App;
