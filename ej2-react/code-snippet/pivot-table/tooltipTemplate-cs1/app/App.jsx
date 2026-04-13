
import { Inject, PivotViewComponent, Toolbar } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let toolbarOptions = ['Grid', 'Chart'];
    let chartSettings = {
        chartSeries: { type: 'Column', animation: { enable: false } },
        tooltip: { template: '<span class="wrap">${aggregateType} of ${valueField}: ${value}</span>' }
    };
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} showTooltip={true} dataSourceSettings={dataSourceSettings} chartSettings={chartSettings} displayOption={{ view: 'Both' }} showToolbar={true} tooltipTemplate={"#Template"} toolbar={toolbarOptions}><Inject services={[Toolbar]}/></PivotViewComponent>);
};
export default App;

