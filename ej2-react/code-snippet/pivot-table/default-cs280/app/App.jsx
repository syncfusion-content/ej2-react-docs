import { GroupingBar, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        sortSettings: [{ name: 'Country', order: 'Ascending', membersOrder: ['United Kingdom', 'France'] }, { name: 'Year', order: 'Descending', membersOrder: ['FY 2015', 'FY 2017'] }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} showGroupingBar={true} enableSorting={true} dataSourceSettings={dataSourceSettings}><Inject services={[GroupingBar]}/></PivotViewComponent>);
};
export default App;

