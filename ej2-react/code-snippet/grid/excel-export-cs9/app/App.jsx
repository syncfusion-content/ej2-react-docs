import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    let textBox;
    const toolbar = ['ExcelExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_excelexport') {
            const excelExportProperties = {
                fileName: textBox.value !== "" ? textBox.value + '.xlsx' : 'new.xlsx'
            };
            grid.excelExport(excelExportProperties);
        }
    }
    return (
        <div>
            <label style={{ padding: "30px 17px 0 0" }}>Enter file name: </label>
            <TextBoxComponent ref={t => textBox = t} placeholder="Enter file name" width="120"></TextBoxComponent>
            <GridComponent id='Grid' dataSource={data} height={250} toolbar={toolbar}
                allowExcelExport={true} toolbarClick={toolbarClick} ref={g => grid = g}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
                </ColumnsDirective>
                <Inject services={[Toolbar, ExcelExport]} />
            </GridComponent>
        </div>
    );
}
export default App;