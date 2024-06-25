

import { GroupingBar, IDataOptions, IDataSet, Inject, PivotViewComponent, FieldRemoveEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
    return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} fieldRemove={fieldRemove.bind(this)} showGroupingBar={true}><Inject services={[GroupingBar]} /></PivotViewComponent>);

  function fieldRemove(args: FieldRemoveEventArgs): void  {
    if(args.fieldName === 'Country') {
      args.cancel = true;
    }
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



