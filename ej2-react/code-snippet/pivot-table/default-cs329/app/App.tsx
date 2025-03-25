import * as React from 'react';
import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
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
  };
  let pivotObj: PivotViewComponent;
  function load(): void {
    if (pivotObj) {
      pivotObj.minWidth = 250;
    }
  }

  return (<PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotView' width={250} dataSourceSettings={dataSourceSettings} load={load.bind(this)}>
  </PivotViewComponent>);
};

export default App;
