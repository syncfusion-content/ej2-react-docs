import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
function App() {
    let editSettings = {
        allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Dialog'
    };
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
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} actionFailure={actionFailure.bind(this)} editSettings={editSettings}></PivotViewComponent>);
    function actionFailure(args) {
        if (args.actionName == 'Add new record' || args.actionName == 'Save edited records') {
            // Triggers when the current UI action fails to achieve the desired result.
        }
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
