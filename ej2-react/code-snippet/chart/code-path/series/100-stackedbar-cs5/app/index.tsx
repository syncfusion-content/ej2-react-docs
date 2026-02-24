{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StackingBarSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { stackBarData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Months' };
  const primaryyAxis: AxisModel = {
    title: 'Percentage (%)', minimum: -20, maximum: 100,
    edgeLabelPlacement: 'Shift', labelFormat: '{value}%'
  };
  const emptyPoint: object = { mode: 'Zero' };
  const emptyPoint1: object = { mode: 'Gap' };
  const emptyPoint2: object = { mode: 'Average' };
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Sales Comparison'>
      <Inject services={[StackingBarSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y' name='Apple' type='StackingBar100' emptyPointSettings={emptyPoint}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackBarData} xName='x' yName='y1' name='orange' type='StackingBar100' emptyPointSettings={emptyPoint1}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackBarData} xName='x' yName='y2' name='Wastage' type='StackingBar100' emptyPointSettings={emptyPoint2}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
