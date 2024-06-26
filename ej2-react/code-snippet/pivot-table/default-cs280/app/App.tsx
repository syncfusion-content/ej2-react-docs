

import { GroupingBar, IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    enableSorting: true,
    sortSettings: [{ name: 'Country', order: 'Ascending', membersOrder: ['United Kingdom','France'] }, {name: 'Year', order: 'Descending', membersOrder: ['FY 2015','FY 2017']}],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    filters: []
  }
  let pivotObj: PivotViewComponent;
  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} showGroupingBar={true} enableSorting={true} dataSourceSettings={dataSourceSettings}><Inject services={[GroupingBar]}/></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



