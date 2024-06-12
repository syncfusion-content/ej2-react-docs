

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
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
  return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}><Inject services={[FieldList]} />
    </PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById("sample"));



