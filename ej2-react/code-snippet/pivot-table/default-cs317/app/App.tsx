

import { FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent, AggregateEventArgs, AggregateTypes, SummaryTypes } from '@syncfusion/ej2-react-pivotview';
import { L10n } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
const SummaryType: string[] = [
  'Sum',
  'Count',
  'DistinctCount',
  'Avg',
  'CustomAggregateType1',
  'CustomAggregateType2'
];
function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    columns: [{ name: 'Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold' }, { name: 'Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    subTotalsPosition: 'Bottom'
  }
  let pivotObj: PivotViewComponent;

  function dataBound(): void {
    pivotObj.getAllSummaryType = function () {
      return SummaryType as AggregateTypes[];
    };
    pivotObj.pivotFieldListModule.aggregateTypes = SummaryType as AggregateTypes[];
    pivotObj.pivotFieldListModule.getAllSummaryType = function () {
      return SummaryType as AggregateTypes[];
    };
  }

  function aggregateCell(args: AggregateEventArgs): void {
    if (args.aggregateType === 'CustomAggregateType1' as SummaryTypes) {
      args.value = args.value as number * 100;
    }
    if (args.aggregateType === 'CustomAggregateType2' as SummaryTypes) {
      args.value = args.value as number / 100;
    }
  }

  return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}
    dataBound={dataBound.bind(this)} aggregateCellInfo={aggregateCell.bind(this)}>
    <Inject services={[FieldList]} />
  </PivotViewComponent>);

};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



