import { FieldList, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotNullData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
        dataSource: pivotNullData as IDataSet[],
        expandAll: false,
        rows: [{ name: 'Country' }, { name: 'State'}],
        columns: [{ name: 'Product', showNoDataItems: true }, { name: 'Date' }],
        values: [{ name: 'Amount' }, { name: 'Quantity' }],
        showHeaderWhenEmpty: false
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}><Inject services={[FieldList]} /></PivotViewComponent>);
};

export default App;
