

import { GroupingBar, FieldList, Inject, IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: pivotData as IDataSet,
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount', type: 'Sum' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    filters: [],
  }
  let pivotObj: PivotViewComponent;
  let pivotAggregateTypes: any = ['DistinctCount', 'Avg', 'Product'];
    return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true} showGroupingBar={true} aggregateTypes={pivotAggregateTypes}><Inject services={[GroupingBar, FieldList]}/></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



