

import { IDataOptions, IDataSet, PivotViewComponent, EnginePopulatingEventArgs } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C2'}],
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
  }
  let pivotObj: PivotViewComponent;

  function enginePopulating(args: EnginePopulatingEventArgs): void {
      args.dataSourceSettings.columns[0].caption = "Full Year";
      args.dataSourceSettings.expandAll = true;
  }

  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} enginePopulating={enginePopulating.bind(this)} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



