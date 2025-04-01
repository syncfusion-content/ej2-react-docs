

import { FieldList, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    data: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C2', useGrouping: false, minimumSignificantDigits: 1, maximumSignificantDigits: 3 }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
  }
  let pivotGridObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={d => pivotGridObj = d} id='PivotView' height={280} dataSourceSettings={dataSourceSettings} showFieldList={true}><Inject services={[FieldList]}/></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



