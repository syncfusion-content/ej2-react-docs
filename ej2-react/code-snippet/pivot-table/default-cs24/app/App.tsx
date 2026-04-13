import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { DataManager, JsonAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {
  let pivotObj: PivotViewComponent;
  let dataSource: DataManager = new DataManager({
    json: pivotData,
    adaptor: new JsonAdaptor
  });
  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: dataSource,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  };

  return <PivotViewComponent ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>
};

export default App;
