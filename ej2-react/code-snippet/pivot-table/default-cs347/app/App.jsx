import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, PDFExport, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let pivotObj;

    let gridSettings = {
        columnWidth: 140
    };

    let dataSourceSettings = {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Year', items: ['FY 2015'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    };

    function btnClick() {
        let pdfExportProperties = {
            allowHorizontalOverflow: true
        };
        pivotObj.pdfExport(pdfExportProperties);
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

