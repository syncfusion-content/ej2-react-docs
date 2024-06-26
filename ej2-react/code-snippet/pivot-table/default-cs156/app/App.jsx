import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    function dataBound() {
        if (pivotObj) {
            pivotObj.minHeight = 200;
        }
    }
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={200} dataSourceSettings={dataSourceSettings} dataBound={dataBound.bind(this)}>
    </PivotViewComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
