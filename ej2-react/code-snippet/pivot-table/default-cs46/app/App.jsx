import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Year', items: ['FY 2015','FY 2016'] }, { name: 'Quarter', delimiter:'~~',items: ['FY 2015~~Q1'] }],
        rows: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        columns: [{ name: 'Country' }],
        filters: [],
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};
export default App;

