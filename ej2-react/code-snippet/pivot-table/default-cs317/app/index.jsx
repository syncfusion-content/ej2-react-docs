import { FieldList, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { L10n } from '@syncfusion/ej2-base';
import { pivotData } from './datasource';
L10n.load({
    'en-US': {
        pivotview: {
            CustomAggregateType1: 'Custom Aggregate Type 1',
            CustomAggregateType2: 'Custom Aggregate Type 2',
        },
        pivotfieldlist: {
            CustomAggregateType1: 'Custom Aggregate Type 1',
            CustomAggregateType2: 'Custom Aggregate Type 2',
        }
    }
});
const SummaryType = [
    'Sum',
    'Count',
    'DistinctCount',
    'Avg',
    'CustomAggregateType1',
    'CustomAggregateType2'
];
function App() {
    let dataSourceSettings = {
        expandAll: false,
        dataSource: pivotData,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold' }, { name: 'Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        subTotalsPosition: 'Bottom'
    };
    let pivotObj;
    function dataBound() {
        pivotObj.getAllSummaryType = function () {
            return SummaryType;
        };
        pivotObj.pivotFieldListModule.aggregateTypes = SummaryType;
        pivotObj.pivotFieldListModule.getAllSummaryType = function () {
            return SummaryType;
        };
    }
    function aggregateCell(args) {
        if (args.aggregateType === 'CustomAggregateType1') {
            args.value = args.value * 100;
        }
        if (args.aggregateType === 'CustomAggregateType2') {
            args.value = args.value / 100;
        }
    }
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} dataBound={dataBound.bind(this)} showFieldList={true}
        aggregateCellInfo={aggregateCell.bind(this)}>
        <Inject services={[FieldList]} />
    </PivotViewComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
