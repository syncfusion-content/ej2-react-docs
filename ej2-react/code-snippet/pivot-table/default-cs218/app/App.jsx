import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, VirtualScroll, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: true,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        values: [{ name: 'Country' }, { name: 'Products' }],
        rows: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    return (<div><div className="col-md-9"> <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} exportAllPages='false' allowPdfExport={true} enableVirtualization={true} dataSourceSettings={dataSourceSettings}><Inject services={[VirtualScroll]}/></PivotViewComponent></div>
    <div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent></div></div>);
    function btnClick() {
        pivotObj.pdfExport();
    }
};
export default App;

