import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
  let dataSourceSettings: IDataOptions = {
    url: 'https://cdn.syncfusion.com/data/sales-analysis.json',
    expandAll: false,
    rows: [
      { name: 'EnerType', caption: 'Energy Type' },
    ],
    columns: [
      { name: 'EneSource', caption: 'Energy Source' }
    ],
    values: [
      { name: 'PowUnits', caption: 'Units (GWh)' },
      { name: 'ProCost', caption: 'Cost (MM)' }
    ],
    filters: []
  };
  let pivotObj: PivotViewComponent;
  return <PivotViewComponent ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>
};

export default App;
