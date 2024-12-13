import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import { Browser } from '@syncfusion/ej2-base';
function App() {
    let dataSourceSettings = {
        dataSource: pivotData,
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        rows: [
            { name: 'Product_Categories', caption: 'Product Categories' },
            { name: 'Products' },
            { name: 'Order_Source', caption: 'Order Source' },
        ],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        drilledMembers: [
            { name: 'Product_Categories', items: ['Accessories', 'Bikes'] },
            { name: 'Products', delimiter: '##', items: ['Accessories##Helmets'] },
        ],
        filterSettings: [
            {
                name: 'Products',
                type: 'Exclude',
                items: ['Cleaners', 'Fenders'],
            },
        ],
        expandAll: false,
        values: [
            { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' },
        ],
        filters: [],
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} showFieldList={true} dataSourceSettings={dataSourceSettings} gridSettings={{ columnWidth: Browser.isDevice ? 100 : 120, layout: 'Tabular' }}><Inject services={[FieldList]} /></PivotViewComponent>);
};
export default App;

