import { PivotViewComponent, Inject, PivotChart, GroupingBar } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let displayOption = {
        view: 'Chart'
    };
    let chartSettings = {
        chartSeries: { type: 'Bar' }
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
    return (<PivotViewComponent height={350} ref={d => pivotObj = d} id='PivotView' chartSettings={chartSettings} showGroupingBar={true} displayOption={displayOption} dataSourceSettings={dataSourceSettings}><Inject services={[PivotChart, GroupingBar]}/></PivotViewComponent>);
};
export default App;

