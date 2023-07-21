

import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    enableSorting: true,
    drilledMembers: [{ name: 'Year', items: ['FY 2015'] }, { name: 'Country', items: ['France'] }],
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent height={350} ref={d => pivotObj = d} id='PivotView' dataSourceSettings={dataSourceSettings} hyperlinkSettings={{
    conditionalSettings: [{
      measure: 'Sold',
      conditions: 'Between',
      value1: 150,
      value2: 500
    }],
    cssClass: 'e-custom-class'
  }}></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



