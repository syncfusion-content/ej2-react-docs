import * as React from 'react';
import { FieldList, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { pivotData } from './datasource';
function App() {
  const dataSourceSettings: DataSourceSettingsModel = {
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
  return (<PivotViewComponent ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}><Inject services={[FieldList]} />
    </PivotViewComponent>);
};

export default App;




