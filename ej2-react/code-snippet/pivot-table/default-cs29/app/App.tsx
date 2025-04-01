import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { DataManager, ODataV4Adaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';

function App() {
  let pivotObj: PivotViewComponent;
  let dataSource: DataManager = new DataManager({
    adaptor: new ODataV4Adaptor,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=7',
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

  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};

export default App;
