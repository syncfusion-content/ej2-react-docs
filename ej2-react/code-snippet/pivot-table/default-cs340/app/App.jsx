import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, PDFExport, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { salesData } from './datasource';
function App() {
    let dataSourceSettings = {
        dataSource: salesData,
        expandAll: false,
        rows: [{ name: 'Region', caption: 'Region' }],
        columns: [{ name: 'Product', caption: 'Product' }],
        values: [
            { name: 'Sales', caption: 'Q4 Sales' },
            { name: 'ProfitMargin', caption: 'Profit Margin' }
        ],
        formatSettings: [
            { name: 'Sales', format: 'C0' },
            { name: 'ProfitMargin', format: '0\'%\'' }
        ],
        filterSettings: [{ name: 'Product', items: ['Laptop'], type: 'Include' }]
    };
    let pivotObj;
    let dataSourceSettings1 = {
        dataSource: salesData,
        expandAll: false,
        columns: [{ name: 'Region', caption: 'Region' }],
        rows: [{ name: 'Product', caption: 'Product' }],
        values: [
            { name: 'Units', caption: 'Units Sold' },
            { name: 'Sales', caption: 'Q4 Sales' }
        ],
        formatSettings: [
            { name: 'ProfitMargin', format: '0\'%\'' },
            { name: 'Sales', format: 'C0' }
        ],
        filterSettings: [{ name: 'Product', items: ['Smartphone'], type: 'Include' }]
    };
    let pivotObj1;
    return (<div><div className="col-md-9"> <PivotViewComponent ref={d => pivotObj = d} id='PivotTable1' height={280} dataSourceSettings={dataSourceSettings} allowPdfExport={true}><Inject services={[PDFExport]} /></PivotViewComponent></div>
        <div className="col-md-9" style={{ marginTop: '20px' }}> <PivotViewComponent ref={d => pivotObj1 = d} id='PivotTable2' height={280} dataSourceSettings={dataSourceSettings1} allowPdfExport={true}><Inject services={[PDFExport]} /></PivotViewComponent></div>
        <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);
    function btnClick() {
        const pdfExportProperties = {
            multipleExport: { type: 'NewPage' },
            pivotTableIds: ['PivotTable1', 'PivotTable2']
        };
        pivotObj.pdfExport(pdfExportProperties, true);
    }
};
export default App;

