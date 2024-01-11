import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, DetailRow, ExcelExport, ExcelExportProperties, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { GridModel, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
    let grid;
    let dropDown;
    const toolbar = ['ExcelExport'];
    const ddlData = [
        { text: 'Expanded', value: 'Expanded' },
        { text: 'All', value: 'All' },
        { text: 'None', value: 'None' },
    ];
    const childGridOptions = {
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
        dataSource: data,
        queryString: 'EmployeeID'
    };
    const toolbarClick = (args) => {
        if (args.item.id === 'Grid_excelexport') {
            const exportProperties = {
                hierarchyExportMode: dropDown.value
            };
            grid.excelExport(exportProperties);
        }
    }
    return (
        <div>
            <label style={{ padding: "10px 10px 26px 0" }}> Change the hierarchy export mode: </label>
            <DropDownListComponent ref={d => dropDown = d} index={0} width={200} dataSource={ddlData}></DropDownListComponent>
            <GridComponent id='Grid' dataSource={employeeData} toolbar={toolbar} allowExcelExport={true}
                toolbarClick={toolbarClick} ref={g => grid = g} childGrid={childGridOptions}>
                <ColumnsDirective>
                    <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
                    <ColumnDirective field='FirstName' headerText='First Name' width='150' />
                    <ColumnDirective field='LastName' headerText='Last Name' width='150' />
                    <ColumnDirective field='City' headerText='City' width='150' />
                </ColumnsDirective>
                <Inject services={[DetailRow, Toolbar, ExcelExport]} />
            </GridComponent>
        </div>
    );
}
export default App;