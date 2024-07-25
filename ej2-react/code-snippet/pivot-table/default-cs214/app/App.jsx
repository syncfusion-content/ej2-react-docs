import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
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
                header: {
                    fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true, borders: { color: '#64FA50', lineStyle: 'Thin' }
                },
                record: {
                    fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true
                },
                caption: {
                    fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true
                }
            }
        };
        pivotObj.pdfExport(pdfExportProperties);
    }
};
export default App;

