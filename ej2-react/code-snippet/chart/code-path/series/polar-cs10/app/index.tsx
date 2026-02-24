
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         RadarSeries, LineSeries, ColumnSeries}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Month', startAngle: 90 };
  const primaryyAxis: AxisModel = { minimum: 20, maximum: 40, interval: 5, title: 'Efficiency', labelFormat: '{value}%' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Efficiency of oil-fired power production'>
      <Inject services={[RadarSeries, LineSeries, ColumnSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Radar' drawType='Line'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}

