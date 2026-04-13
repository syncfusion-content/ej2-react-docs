import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, Inject, PDFExport } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let gridSettings = {
        columnWidth: 140,
        pdfHeaderQueryCellInfo: pdfHeaderQueryCellInfo.bind(this)
    };

    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        filters: [],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    function pdfHeaderQueryCellInfo(args) {
        if (args.gridCell && args.gridCell.valueSort && args.gridCell.valueSort.levelName === 'FY 2015.Units Sold'
            && args.cell && args.cell.row && args.cell.row.pdfGrid && args.cell.row.pdfGrid.gridColumns
            && args.cell.row.pdfGrid.gridColumns.columns[args.gridCell.colIndex]) {
            args.cell.row.pdfGrid.gridColumns.columns[args.gridCell.colIndex].width = 250;
        }
    }
    return (<div><div className="col-md-9"> <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} allowPdfExport={true}
        dataSourceSettings={dataSourceSettings} gridSettings={gridSettings}><Inject services={[PDFExport]} /></PivotViewComponent></div>
        <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);
    function btnClick() {
        let pdfExportProperties = {
            fileName: 'pdfexport'
        };
        pivotObj.pdfExport(pdfExportProperties, false, null, false, true);
    }
};
export default App;

