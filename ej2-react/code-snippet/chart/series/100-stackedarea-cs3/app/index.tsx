{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, DateTime, Tooltip, DataLabel, Zoom, Crosshair, StackingAreaSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { percentData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
    title: 'Years', valueType: 'DateTime', intervalType: 'Years',
    edgeLabelPlacement: 'Shift', labelFormat: 'y'};
  const primaryyAxis: AxisModel = { title: 'Temperature (%)', labelFormat: '{value}%', rangePadding: 'None' };
  const border: object = { width: 2, color: 'red' };
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Annual Temperature Comparison'>
      <Inject services={[StackingAreaSeries, Legend, Tooltip, DataLabel, DateTime]} />
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y' name='USA' type='StackingArea100' border={border} dashArray='2,6'>
        </SeriesDirective>
        <SeriesDirective dataSource={percentData} xName='x' yName='y1' name='UK' type='StackingArea100' border={border} dashArray='2,6'>
        </SeriesDirective>
        <SeriesDirective dataSource={percentData} xName='x' yName='y2' name='Canada Alternatives' type='StackingArea100' border={border} dashArray='2,6'>
        </SeriesDirective>
        <SeriesDirective dataSource={percentData} xName='x' yName='y3' name='China' type='StackingArea100' border={border} dashArray='2,6'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
