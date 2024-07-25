import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivot_flatdata } from './datasource';
import './App.css';

function App() {
    let editSettings = {
        allowEditing: true, allowInlineEditing: true
    };
    let dataSourceSettings = {
        dataSource: pivot_flatdata,
        expandAll: true,
        rows: [{ name: 'Country' }],
        columns: [{ name: 'Date' }, { name: 'Product' }],
        values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        showColumnSubTotals: false
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} editSettings={editSettings}></PivotViewComponent>);
};
export default App;

