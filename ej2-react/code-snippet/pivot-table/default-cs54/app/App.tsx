

import { DrillThrough, IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
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
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  function beginDrillThrough(args: BeginDrillThroughEventArgs): void {
      if (args.gridObj) {
          Grid.Inject(Sort, Filter, Group);
          let gridObj: Grid = args.gridObj;
          gridObj.allowGrouping = true;
          gridObj.allowSorting = true;
          gridObj.allowFiltering = true;
          gridObj.filterSettings = { type: 'CheckBox' };
      }
  }

    return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} allowDrillThrough={true} beginDrillThrough={beginDrillThrough.bind(this)} ><Inject services={[DrillThrough]}/> </PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));


