import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, PdfExport, ExcelExport, Print, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const toolbarTemplate = () => {
        return (
            <div>
                <ButtonComponent id='excelButton' cssClass='e-outline' onClick={exportAction}>Excel Export</ButtonComponent>
                <ButtonComponent id='pdfButton' cssClass='e-outline' onClick={exportAction}>PDF Export</ButtonComponent>
                <ButtonComponent id='printButton' cssClass='e-outline' onClick={exportAction}>Print</ButtonComponent>
            </div>
        )
    }
    const exportAction = (args) => {
        if (args.currentTarget.id === 'excelButton') {
            grid.excelExport();
        }
        else if (args.currentTarget.id === 'pdfButton') {
            grid.pdfExport();
        }
        else {
            grid.print();
        }
    }
    return (<GridComponent dataSource={data} toolbarTemplate={toolbarTemplate} ref={g => grid = g} height={240} allowExcelExport={true} allowPdfExport={true}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
            <ColumnDirective field='ShipName' headerText='ShipName' width='100' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport, ExcelExport, Print]} />
    </GridComponent>)
}
export default App;