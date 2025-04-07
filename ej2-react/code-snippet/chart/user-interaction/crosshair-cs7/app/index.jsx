import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Crosshair } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {
  const primaryxAxis = { valueType: 'Category', title: 'Countries' };
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis}
  crosshair={{ enable: true, line: { color: 'red' }, lineType: 'Vertical', highlightCategory: true }}
    title='Olympic Medals'>
    <Inject services={[ColumnSeries, Legend, Category, Crosshair]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={chartData} xName='country' yName='gold' type='Column'>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
