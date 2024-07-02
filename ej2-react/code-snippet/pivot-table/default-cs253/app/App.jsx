import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let gridSettings = {
        allowAutoResizing: false
    };
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filterSettings: [{ name: 'Year', type: 'Exclude', items: ['FY 2015', 'FY 2017'] }],
        rows: [{ name: 'Country' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }]
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} gridSettings={gridSettings} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};
export default App;

