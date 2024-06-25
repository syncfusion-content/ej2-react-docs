{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data'
import { AxisModel, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective, Category, ColumnSeries } from '@syncfusion/ej2-react-charts';

function App() {

  const dataManager = new DataManager({
    url: 'https://services.odata.org/V3/Northwind/Northwind.svc/Orders/',
    adaptor: new ODataAdaptor(),
    crossDomain: true
  });
  const query = new Query();
  const primaryxAxis: AxisModel = { valueType: 'Category' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      title="Order Details">
      <Inject services={[ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={dataManager} type='Column' xName='CustomerID' yName='Freight' query={query} />
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}