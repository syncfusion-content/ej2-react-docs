

import { FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotNullData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
        dataSource: pivotNullData as IDataSet[],
        expandAll: false,
        rows: [{ name: 'Country' }, { name: 'State'}],
        columns: [{ name: 'Product', showNoDataItems: true }, { name: 'Date' }],
        values: [{ name: 'Amount' }, { name: 'Quantity' }],
        showHeaderWhenEmpty: false
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}><Inject services={[FieldList]} /></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



