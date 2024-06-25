

import { FieldList, GroupingBar, IDataOptions, IDataSet, Inject, PivotViewComponent, PivotActionBeginEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    allowLabelFilter: true,
    allowValueFilter: true,
    columns: [{ name: 'Year', caption: 'Production Year' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }],
    rows: [{ name: 'Country' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: [],
  }
  let pivotObj: PivotViewComponent;

  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} load={onLoad.bind(this)} dataSourceSettings={dataSourceSettings} showFieldList={true} showGroupingBar={true}><Inject services={[FieldList, GroupingBar]} /></PivotViewComponent>);

  function onLoad(args: PivotActionBeginEventArgs): void {
    args.defaultFieldListOrder = 'Descending';
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



