import { FieldList, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotNullData } from './datasource';
function App() {
    let dataSourceSettings = {
        dataSource: pivotNullData,
        expandAll: false,
        rows: [{ name: 'Country' }, { name: 'State' }],
        columns: [{ name: 'Product', showNoDataItems: true }, { name: 'Date' }],
        values: [{ name: 'Amount' }, { name: 'Quantity' }],
        showHeaderWhenEmpty: false
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}><Inject services={[FieldList]}/></PivotViewComponent>);
};
export default App;

