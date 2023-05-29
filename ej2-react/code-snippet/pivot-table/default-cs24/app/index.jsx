import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataManager, JsonAdaptor } from '@syncfusion/ej2-data';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
function App() {
    let pivotObj;
    let dataSource = new DataManager({
        json: pivotData,
        adaptor: new JsonAdaptor
    });
    let dataSourceSettings = {
        dataSource: dataSource,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        expandAll: false,
        filters: [],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    return <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
