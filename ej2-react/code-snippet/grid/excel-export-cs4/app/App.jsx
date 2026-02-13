import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, ExcelExport, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
    let grid;
    let dropDown;
    const dropDownData = [
        { text: 'CurrentPage', value: 'CurrentPage' },
        { text: 'AllPages', value: 'AllPages' },
    ];
    const toolbar = ['ExcelExport'];
    const pageOptions = { pageSize: 6 };
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_excelexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const exportProperties = {
                exportType: dropDown.value
            };
            grid.excelExport(exportProperties);
        }
    }
    return (
        <div>
            <label style={{ padding: "10px 10px 26px 0" }}> Change export type: </label>
            <DropDownListComponent ref={d => dropDown = d} index={0} width={170} dataSource={dropDownData}></DropDownListComponent>
            <GridComponent id='Grid' dataSource={employeeData} toolbar={toolbar} allowExcelExport={true}
                toolbarClick={toolbarClick} ref={g => grid = g} allowPaging={true} pageSettings={pageOptions}>
                <ColumnsDirective>
                    <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' />
                    <ColumnDirective field='FirstName' headerText='First Name' width='150' />
                    <ColumnDirective field='LastName' headerText='Last Name' width='150' />
                    <ColumnDirective field='City' headerText='City' width='150' />
                </ColumnsDirective>
                <Inject services={[Toolbar, ExcelExport, Page]} />
            </GridComponent>
        </div>
    );
}
export default App;