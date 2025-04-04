import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { DataManager, ODataAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';

function App() {
  let dataSource: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Orders',
    adaptor: new ODataAdaptor,
    crossDomain: true
  });
  let dataSourceSettings: DataSourceSettingsModel = {
      dataSource: dataSource,
      expandAll: true,
      filters: [],
      columns: [{ name: 'OrderDate'}, { name: 'ShipCity' }],
      rows: [{ name: 'OrderID' }, { name: 'CustomerID' }],
      values: [{ name: 'Freight' }]
    };
  let pivotObj: PivotViewComponent;
  return <PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>
};

export default App;
