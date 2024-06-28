import { PivotViewComponent, Inject, PivotChart } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {
    let displayOption = {
        view: 'Chart'
    };
    let chartSettings = {
        columnHeader: "Germany-Road Bikes", columnDelimiter: "-",
        chartSeries: { type: 'Doughnut' }
    };
    let dataSourceSettings = {
        columns: [{ name: 'Country' }, { name: 'Products' }],
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['Germany'] }],
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    return (<PivotViewComponent height={350} ref={d => pivotObj = d} id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings}><Inject services={[PivotChart]}/></PivotViewComponent>);
};
export default App;

