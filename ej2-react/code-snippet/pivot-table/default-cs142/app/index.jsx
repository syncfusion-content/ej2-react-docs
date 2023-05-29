import { GroupingBar, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        filters: [],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} aggregateMenuOpen={aggregateMenuOpen.bind(this)} showGroupingBar={true}><Inject services={[GroupingBar]}/></PivotViewComponent>);
    function aggregateMenuOpen(args) {
        args.displayMenuCount = 4;
        if (args.fieldName === 'Amount') {
            args.aggregateTypes = ['Sum', 'Avg', 'Max'];
        }
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
