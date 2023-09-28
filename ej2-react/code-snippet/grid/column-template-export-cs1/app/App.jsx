import { ColumnDirective, ColumnsDirective, GridComponent, Inject,
    PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
    let grid;
    const toolbar = ['PdfExport'];
    const imageTemplate = (props) => {
        return (
            <div className="image">
                <img
                    src={'data:image/jpeg;base64,' + props.EmployeeImage}
                    alt={props.EmployeeID}
                />
            </div>
        );
    };
    const mailTemplate = (props) => {
        return (
            <div className="link">
                <a href={'mailto:' + props.EmailID}>{props.EmailID}</a>
            </div>
        );
    };
    const toolbarClick = (args) => {
        if (grid && args['item'].id === 'ColumnTemplateGrid_pdfexport') {
            grid.pdfExport();
        }
    };
    const pdfQueryCellInfo = (args) => {
        if (args.column.headerText === 'Employee Image') {
            args.image = {
                base64: args.data.EmployeeImage,
                height: 50,
                width: 50,
            };
        }
        if (args.column.headerText === 'Email ID') {
            args.hyperLink = {
                target: 'mailto:' + args.data.EmailID,
                displayText: args.data.EmailID,
            };
        }
    };
    
    return (
        <GridComponent id="ColumnTemplateGrid" ref={(g) => (grid = g)} dataSource={employeeData}
            toolbar={toolbar} allowPdfExport={true} toolbarClick={toolbarClick}
            pdfQueryCellInfo={pdfQueryCellInfo} height="315">
            <ColumnsDirective>
                <ColumnDirective headerText="Employee Image" width="180" template={imageTemplate} textAlign="Center"/>
                <ColumnDirective field="EmployeeID" headerText="Employee ID" width="125"/>
                <ColumnDirective field="FirstName" headerText="Name" width="120" />
                <ColumnDirective field="EmailID" headerText="Email ID" template={mailTemplate} width="170"/>
            </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport]} />
        </GridComponent>
    );
}
export default App;
