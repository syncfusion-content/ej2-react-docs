import { PivotViewComponent, Inject, PivotChart } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {
    let displayOption = {
        view: 'Chart'
    };
    let chartSettings = {
        crosshair: { enable: true },
        chartSeries: {
            type: 'Line',
            marker: { fill: '#EEE', height: 10, width: 10, shape: 'Pentagon', visible: true }
        },
        primaryXAxis: { crosshairTooltip: { enable: true, fill: '#ff0000' } },
        primaryYAxis: { crosshairTooltip: { enable: true, fill: '#0000FF' } }
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
    return (<PivotViewComponent height={350} ref={d => pivotObj = d} id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings}><Inject services={[PivotChart]}/></PivotViewComponent>);
};
export default App;

