
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         RadarSeries, LineSeries}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Month' };
  const primaryyAxis: AxisModel = { title: 'Efficiency', labelFormat: '{value}%' };
  const emptyPoint = { mode: 'Zero' };
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Efficiency of oil-fired power production'>
      <Inject services={[RadarSeries, LineSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Radar' marker={{visible: true}} name='Department' drawType='Line' emptyPointSettings={emptyPoint}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}

