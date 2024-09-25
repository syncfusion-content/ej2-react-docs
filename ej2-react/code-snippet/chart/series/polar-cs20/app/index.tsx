
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         RadarSeries, ColumnSeries}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Month' };
  const primaryyAxis: AxisModel = { minimum: 20, maximum: 40, interval: 5, title: 'Efficiency', labelFormat: '{value}%' };
  const emptyPoint = { mode: 'Average', fill: 'red', border: {width: 2, fill: 'green'} };
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Efficiency of oil-fired power production'>
      <Inject services={[RadarSeries, ColumnSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Radar' name='Department' drawType='Column' emptyPointSettings={emptyPoint}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}

