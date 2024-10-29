import * as React from 'react';
import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';

function App() {
  const dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Date', caption: 'Date' }, { name: 'Product' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'State' }],
    values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity', caption: 'Quantity' }]
  };
  let pivotObj: PivotViewComponent;
  return (
    <PivotViewComponent id='PivotView' ref={ (d: PivotViewComponent) => pivotObj = d } height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>
  );
};

export default App;
