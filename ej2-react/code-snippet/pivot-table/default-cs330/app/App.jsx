import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }, { name: 'Products' }],
        dataSource: pivotData,
        filters: [],
        showSubTotals: false,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }],
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    return (<PivotViewComponent height={350} ref={d => pivotObj = d} id='PivotView' dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};
export default App;

