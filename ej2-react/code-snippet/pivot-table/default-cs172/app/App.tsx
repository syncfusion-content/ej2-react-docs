import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import './App.css';

function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    enableSorting: true,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
  }
  let pivotObj: PivotViewComponent;

  return (<PivotViewComponent height={350} ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' dataSourceSettings={dataSourceSettings} hyperlinkSettings={{
    showColumnHeaderHyperlink: true,
    cssClass: 'e-custom-class'
  }}></PivotViewComponent>);
};

export default App;
