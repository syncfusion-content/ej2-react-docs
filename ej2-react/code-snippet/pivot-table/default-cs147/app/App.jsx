import { GroupingBar, Grouping, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { Group_Data } from './datasource';
import './App.css';

function App() {
    let dataSourceSettings = {
        dataSource: Group_Data,
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Product_ID', format: 'N0' }],
        rows: [{ name: 'Product_ID', caption: 'Product ID' }],
        columns: [{ name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Unit Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
        filters: []
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showGroupingBar={true} allowGrouping={true}><Inject services={[GroupingBar, Grouping]}/></PivotViewComponent>);
};
export default App;

