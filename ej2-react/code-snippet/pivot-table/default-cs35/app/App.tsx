import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { noData } from './datasource';
import './App.css';

function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: noData,
    expandAll: true,
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    columns: [{ name: 'Date', showNoDataItems: true}],
    values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country', showNoDataItems: true }, { name: 'State', showNoDataItems: true }],
    filters: []
  }
  let pivotObj: PivotViewComponent;
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};

export default App;
