import { PivotViewComponent, Inject, PivotChart } from '@syncfusion/ej2-react-pivotview';
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
    function chartSeriesCreated(args) {
        for (let pos = 0; pos < args.series.length; pos++) {
            if (pos % 2 == 0) {
                args.series[pos].visible = false;
            }
        }
    }
    let pivotObj;
    return (<PivotViewComponent height={350} ref={d => pivotObj = d} id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings} chartSeriesCreated={chartSeriesCreated}><Inject services={[PivotChart]}/></PivotViewComponent>);
};
export default App;

