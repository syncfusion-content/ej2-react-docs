import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, PDFExport, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let pivotObj;

    let gridSettings = {
        columnWidth: 140,
        queryCellInfo: function (args) {
            const colIndex = Number(args.cell.getAttribute('aria-colindex'));
            const currentCell = args.data[colIndex - 1];
            if (currentCell.formattedText === '**' &&
                currentCell.actualText === 'Quantity' &&
                ['Canada.New Mexico', 'United States.British Columbia'].includes(currentCell.rowHeaders)) {
                args.rowSpan = 2;
                args.colSpan = 2;
            }
        },
        pdfQueryCellInfo: function (args) {
            if (args.value === '**' &&
                args.data.actualText === 'Quantity' &&
                ['Canada.New Mexico', 'United States.British Columbia'].includes(args.data.rowHeaders)) {
                args.cell.rowSpan = 2;
                args.cell.colSpan = 2;
            }
        }
    };

    let dataSourceSettings = {
        dataSource: pivotData,
        expandAll: true,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        columns: [{ name: 'Date', showNoDataItems: true }],
        values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country', showNoDataItems: true }, { name: 'State', showNoDataItems: true }],
        filters: [],
        emptyCellsTextContent: '**'
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

