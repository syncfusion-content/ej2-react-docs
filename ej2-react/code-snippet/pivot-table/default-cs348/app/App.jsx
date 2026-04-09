import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, PDFExport, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let pivotObj;

    let gridSettings = {
        columnWidth: 140,
        pdfQueryCellInfo: function (args) {
            if (args.cell && args.cell.row && args.cell.row.pdfGrid) {
                args.cell.row.pdfGrid.repeatHeader = false;
            }
        }
    };

    let dataSourceSettings = {
        dataSource: pivotData,
        expandAll: true,
        drilledMembers: [{ name: 'Year', items: ['FY 2015'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }],
        rows: [{ name: 'Country' }, { name: 'Products' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    };

    function btnClick() {
        pivotObj.pdfExport();
    }

    return (
        <div>
            <div className="col-md-9"> <PivotViewComponent ref={(d) => pivotObj = d} id='PivotView' height={350} gridSettings={gridSettings} dataSourceSettings={dataSourceSettings} allowPdfExport={true}>
                <Inject services={[PDFExport]} /></PivotViewComponent>
            </div>
            <div className='col-lg-3 property-section'>
                <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
            </div>
        </div>);

};
export default App;

