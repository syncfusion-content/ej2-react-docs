{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StackingColumnSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { stackColumndata } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Years', interval: 1, valueType: 'Category' };
  const primaryyAxis: AxisModel = {
    title: 'Sales in Billions', minimum: 0, maximum: 700, interval: 100,
    labelFormat: '{value}B'
  };
  const emptyPoint: object = { mode: 'Zero'};
  const emptyPoint1: object = { mode: 'Average'};
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Mobile Game Market by Country'>
      <Inject services={[StackingColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackColumndata} xName='x' yName='y' name='UK' type='StackingColumn' emptyPointSettings={emptyPoint}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackColumndata} xName='x' yName='y1' name='Germany' type='StackingColumn' >
        </SeriesDirective>
        <SeriesDirective dataSource={stackColumndata} xName='x' yName='y2' name='France' type='StackingColumn' emptyPointSettings={emptyPoint1}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackColumndata} xName='x' yName='y3' name='Italy' type='StackingColumn' >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
