import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataManager, ODataV4Adaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';
import './App.css';

function App() {
  let pivotObj: PivotViewComponent;
  let dataSource: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
    adaptor: new ODataV4Adaptor(),
    crossDomain: true
  });
  dataSource.defaultQuery = new Query().take(10);
  let dataSourceSettings: IDataOptions = {
    dataSource: dataSource,
    expandAll: false,
    columns: [{ name: 'CustomerID', caption: 'Customer ID' }],
    rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
    values: [{ name: 'Freight' }]
  };

  return (<PivotViewComponent ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>);
};

export default App;
