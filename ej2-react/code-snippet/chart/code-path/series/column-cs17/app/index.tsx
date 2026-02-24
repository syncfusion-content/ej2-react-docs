{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data'
import { AxisModel, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective, Category, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { SerialNoAdaptor } from './serialNoAdaptor';

function App() {
  const dataManager = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/orders',
    adaptor: new SerialNoAdaptor()
  });
  const query = new Query();
  const primaryxAxis: AxisModel = { valueType: 'Category' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      title="Order Details">
      <Inject services={[ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={dataManager} type='Column' xName='CustomerID' yName='Sno' query={query} />
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}