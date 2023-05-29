

import { IDataOptions, IDataSet, PivotViewComponent, Inject, FieldList } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        allowValueFilter: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
  }
  let pivotObj: PivotViewComponent;

  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}><Inject services={[FieldList]} /></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



