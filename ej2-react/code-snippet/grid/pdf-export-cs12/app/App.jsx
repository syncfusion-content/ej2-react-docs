import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    let dropDown;
    const toolbar = ['PdfExport'];
    const ddlData = [
        { text: 'Portrait', value: 'Portrait' },
        { text: 'Landscape', value: 'Landscape' },
    ];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const exportProperties = {
                pageOrientation: dropDown.value
            };
            grid.pdfExport(exportProperties);
        }
    }
    return (
        <div>
            <label style={{ padding: "10px 10px 26px 0" }}> Change the page orientation property: </label>
            <DropDownListComponent ref={d => dropDown = d} index={0} width={200} dataSource={ddlData}></DropDownListComponent>
            <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
                toolbarClick={toolbarClick} ref={g => grid = g}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
                </ColumnsDirective>
                <Inject services={[Toolbar, PdfExport]} />
            </GridComponent>
        </div>
    );
}
export default App;