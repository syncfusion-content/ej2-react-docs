import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, VirtualScroll, Inject, PDFExport } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {
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
    return (<div><div className="col-md-9"> <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} allowPdfExport={true} enableVirtualization={true} 
        dataSourceSettings={dataSourceSettings} beforeExport={beforeExport.bind(this)}><Inject services={[VirtualScroll, PDFExport]}/></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);
    function beforeExport(args) {
        args.columnSize = 6;
    }
    function btnClick() {
        let pdfExportProperties = {
            fileName: 'pdfexport'
        };
        pivotObj.pdfExport(pdfExportProperties, false, null, false, true);
    }
};
export default App;

