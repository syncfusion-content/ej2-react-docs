import { GroupingBar, Grouping, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { Group_Data } from './datasource';
function App() {
    let dataSourceSettings = {
        dataSource: Group_Data,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Product_ID', caption: 'Product ID' }],
        rows: [
            { name: 'Date_Year', caption: 'Year' },
            { name: 'Date_Month', caption: 'Month' },
        ],
        values: [
            { name: 'Sold', caption: 'Unit Sold' },
            { name: 'Amount', caption: 'Sold Amount' },
        ],
        formatSettings: [
            { name: 'Amount', format: 'C' },
            { name: 'Date_Year', type: 'date_year', format: 'yyyy' },
            { name: 'Date_Month', type: 'date_month', format: 'MMM' },
        ],
        filters: [],
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showGroupingBar={true} allowGrouping={true}><Inject services={[GroupingBar, Grouping]}/></PivotViewComponent>);
};
export default App;

