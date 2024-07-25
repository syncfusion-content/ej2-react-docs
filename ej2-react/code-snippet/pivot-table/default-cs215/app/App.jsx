import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData, base64AlgeriaFont } from './datasource';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';
import './App.css';

function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    return (<div><div className="col-md-9"> <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={280} dataSourceSettings={dataSourceSettings} allowPdfExport={true}></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);
    function btnClick() {
        let pdfExportProperties = {
            theme: {
                header: { font: new PdfTrueTypeFont(base64AlgeriaFont, 11) },
                caption: { font: new PdfTrueTypeFont(base64AlgeriaFont, 9) },
                record: { font: new PdfTrueTypeFont(base64AlgeriaFont, 10) }
            }
        };
        pivotObj.pdfExport(pdfExportProperties);
    }
};
export default App;

