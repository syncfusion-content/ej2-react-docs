import { GroupingBar, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
function App() {
    let groupingSettings = {
        showFieldsPanel: true
    };
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: true,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} groupingBarSettings={groupingSettings} dataBound={trend.bind(this)} dataSourceSettings={dataSourceSettings} showGroupingBar={true}><Inject services={[GroupingBar]}/> </PivotViewComponent>);
    function trend() {
        if (pivotObj.showGroupingBar) {
            let columns = [];
            for (let i = 1; i < pivotObj.grid.columnModel.length; i++) {
                columns.push(pivotObj.grid.columnModel[i].field);
            }
            pivotObj.grid.autoFitColumns(columns);
        }
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
