import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { DataManager, WebApiAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';

function App() {
  let dataSourceSettings: DataSourceSettingsModel;
  let pivotObj: PivotViewComponent;
  let dataSource: Promise<void> = new DataManager({
    url: 'https://bi.syncfusion.com/northwindservice/api/orders',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  }).executeQuery(new Query().take(8)).then((e: ReturnOption) => {
    pivotObj.dataSourceSettings = {
      dataSource: e.result as IDataSet[],
      expandAll: true,
      filters: [],
      columns: [{ name: 'ProductName', caption: 'Product Name' }],
      rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
      formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
      values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
    }
  });

  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} spinnerTemplate={'<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>'} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};

export default App;
