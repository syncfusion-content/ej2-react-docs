import { GroupingBar, FieldList, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        filters: [],
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} actionComplete={actionComplete.bind(this)} showFieldList={true} showGroupingBar={true}><Inject services={[FieldList, GroupingBar]}/></PivotViewComponent>);
    function actionComplete(args) {
        if (args.actionName == 'Field filtered') {
            // Triggers when the filter action is completed.
        }
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
