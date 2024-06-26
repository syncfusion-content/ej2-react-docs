

import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataManager, ODataAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  let dataSource: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Orders',
    adaptor: new ODataAdaptor,
    crossDomain: true
  });
  let dataSourceSettings: IDataOptions = {
      dataSource: dataSource,
      expandAll: true,
      filters: [],
      columns: [{ name: 'OrderDate'}, { name: 'ShipCity' }],
      rows: [{ name: 'OrderID' }, { name: 'CustomerID' }],
      values: [{ name: 'Freight' }]
    };
  let pivotObj: PivotViewComponent;
  return <PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



