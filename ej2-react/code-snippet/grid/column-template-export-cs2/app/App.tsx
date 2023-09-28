import { ColumnDirective, ColumnsDirective, GridComponent, Inject, ExcelExport,
    Toolbar, Grid, ToolbarItems, ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-react-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
    let grid: Grid | null;
    const toolbar: ToolbarItems[] = ['ExcelExport'];
    const imageTemplate = (props: any) => {
        return (
            <div className="image">
                <img
                    src={'data:image/jpeg;base64,' + props.EmployeeImage}
                    alt={props.EmployeeID}
                />
            </div>
        );
    };
    const mailTemplate = (props: any) => {
        return (
            <div className="link">
                <a href={'mailto:' + props.EmailID}>{props.EmailID}</a>
            </div>
        );
    };
    const toolbarClick = (args: ClickEventArgs) => {
        if (grid && args['item'].id === 'ColumnTemplateGrid_excelexport') {
            grid.excelExport();
        }
    };
    const excelQueryCellInfo = (args: ExcelQueryCellInfoEventArgs) => {
        if (args.column.headerText === 'Employee Image') {
            args.image = {
                base64: args.data['EmployeeImage'],
                height: 70,
                width: 70,
            };
        }
        if (args.column.headerText === 'Email ID') {
            args.hyperLink = {
                target: 'mailto:' + args.data['EmailID'],
                displayText: args.data['EmailID'],
            };
        }
    };
    
    return (
        <GridComponent id="ColumnTemplateGrid" ref={(g) => (grid = g)} dataSource={employeeData} toolbar={toolbar}
        allowExcelExport={true} toolbarClick={toolbarClick} excelQueryCellInfo={excelQueryCellInfo} height="315">
            <ColumnsDirective>
                <ColumnDirective headerText="Employee Image" width="180" template={imageTemplate} textAlign="Center" />
                <ColumnDirective field="EmployeeID" headerText="Employee ID" width="125" />
                <ColumnDirective field="FirstName" headerText="Name" width="120" />
                <ColumnDirective field="EmailID" headerText="Email ID" template={mailTemplate} width="170" />
            </ColumnsDirective>
            <Inject services={[Toolbar, ExcelExport]} />
        </GridComponent>
    );
}
export default App;
