


import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { Category, ChartComponent, ColumnSeries, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
function App() {
  const dataManager = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/orders'
  });
  const query = new Query().take(5).where('Estimate', 'lessThan', 3, false);
  const primaryxAxis = { valueType: 'Category' };
  const primaryyAxis = { title: 'Freight rate in U.S. dollars' };
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title="Container freight rate">
    <Inject services={[ColumnSeries, Legend, Category, LineSeries]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={dataManager} xName='CustomerID' type='Column' yName='Freight' query={query} />
    </SeriesCollectionDirective>
  </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


