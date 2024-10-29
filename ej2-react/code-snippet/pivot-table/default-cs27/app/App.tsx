import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';

function App() {

  let dataSourceSettings: IDataOptions = {
    url: 'https://bi.syncfusion.com/productservice/api/sales',
    type: 'CSV',
    expandAll: false,
    enableSorting: true,
    formatSettings: [{ name: 'Total Cost', format: 'C0' }, { name: 'Total Revenue', format: 'C0' }, { name: 'Total Profit', format: 'C0' }],
    drilledMembers: [{ name: 'Item Type', items: ['Baby Food'] }],
    rows: [
        { name: 'Region' },
        { name: 'Country' }
    ],
    columns: [
        { name: 'Item Type' },
        { name: 'Sales Channel' }
    ],
    values: [
        { name: 'Total Cost' },
        { name: 'Total Revenue' },
        { name: 'Total Profit' }
    ],
    filters: []
  };
  let pivotObj: PivotViewComponent;
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};

export default App;
