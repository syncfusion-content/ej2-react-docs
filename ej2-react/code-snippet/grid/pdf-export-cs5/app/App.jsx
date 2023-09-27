import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';
function App() {
    const toolbar = ['PdfExport'];
    const gridsToExport = ['FirstGrid', 'SecondGrid']
    let firstGrid;
    let secondGrid;
    const toolbarClick = (args) => {
        if (firstGrid && args.item.id === 'FirstGrid_pdfexport') {
            if (firstGrid && args.item.id === 'FirstGrid_pdfexport') {
                const appendPdfExportProperties = {
                  multipleExport: { type: 'NewPage' }
                };
                  firstGrid.pdfExport(appendPdfExportProperties, true);
              }
        }
    };
    return (<div>
        <div><b>First Grid:</b></div>
        <GridComponent id='FirstGrid' dataSource={data.slice(0, 5)} toolbar={toolbar} allowPdfExport={true} toolbarClick={toolbarClick} exportGrids={gridsToExport} ref={g => firstGrid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
            </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport]}/>
        </GridComponent>
        <div><b>Second Grid:</b></div>
        <GridComponent id='SecondGrid' dataSource={employeeData.slice(0, 5)} allowPdfExport={true} ref={g => secondGrid = g}>
            <ColumnsDirective>
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
                <ColumnDirective field='FirstName' headerText='First Name' width='120'/>
                <ColumnDirective field='LastName' headerText='Last Name' width='120'/>
                <ColumnDirective field='City' headerText='City' width='150'/>
            </ColumnsDirective>
            <Inject services={[PdfExport]}/>
        </GridComponent>
    </div>);
}
export default App;
