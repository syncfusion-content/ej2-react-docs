import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, Inject, PivotChart, PDFExport } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let displayOption = {
        view: 'Chart'
    };
    let chartSettings = {
        chartSeries: { type: 'Column' }
    };
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
    function exportClick() {
        pivotObj.chartExport('PNG', 'result');
    }
    return (<div><div><ButtonComponent cssClass='e-primary' onClick={exportClick.bind(this)}>Export</ButtonComponent></div><div><PivotViewComponent height={350} ref={d => pivotObj = d} id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings} allowPdfExport={true}><Inject services={[PivotChart,PDFExport]}/></PivotViewComponent></div></div>);
};
export default App;

