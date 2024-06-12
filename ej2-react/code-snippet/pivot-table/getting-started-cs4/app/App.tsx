

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { IDataOptions, IDataSet, Inject, PivotViewComponent, GroupingBar } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';
function App() {
  const dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Date', caption: 'Date' }, { name: 'Product' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'State' }],
    values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity', caption: 'Quantity' }]
  };
  let pivotObj: PivotViewComponent;
    return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showGroupingBar={true}><Inject services={[GroupingBar]} />
    </PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById("sample"));



