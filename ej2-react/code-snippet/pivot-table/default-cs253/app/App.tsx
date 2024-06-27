import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import './App.css';

function App() {
  let gridSettings: GridSettings = {
    allowAutoResizing: false
  } as GridSettings;

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filterSettings: [{ name: 'Year', type: 'Exclude', items: ['FY 2015', 'FY 2017'] }],
    rows: [{ name: 'Country' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }]
  }
  let pivotObj: PivotViewComponent;

  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} gridSettings={gridSettings} dataSourceSettings={dataSourceSettings} ></PivotViewComponent>);
};

export default App;
