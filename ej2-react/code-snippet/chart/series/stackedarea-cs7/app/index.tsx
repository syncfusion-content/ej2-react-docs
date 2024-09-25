{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, DateTime, Tooltip, DataLabel, Zoom, Crosshair, StackingAreaSeries,  ISeriesRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { stackedData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
    title: 'Years', valueType: 'DateTime', intervalType: 'Years',
    majorTickLines: { width: 0 }, labelFormat: 'y', edgeLabelPlacement: 'Shift'};
  const primaryyAxis: AxisModel = {
    title: 'Spend in Billions', minimum: 0, maximum: 7, interval: 1,
    majorTickLines: { width: 0 }, labelFormat: '{value}B'};
    const marker: object = { visible: true };
    const seriesRender = (args: ISeriesRenderEventArgs) => {
      if (args.series.index === 0) {
        args.fill = '#ff4251';
    }
    else if (args.series.index === 1) {
        args.fill = '#4C4C4C';
    }
    else if (args.series.index === 2) {
        args.fill = '#794F1B';
    }
    else if (args.series.index === 3) {
        args.fill = '#1a9a6f';
    }
    };
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Trend in Sales of Ethical Produce' seriesRender={seriesRender}>
      <Inject services={[StackingAreaSeries, Legend, Tooltip, DataLabel, DateTime]} />
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackedData} xName='x' yName='y' name='Organic' type='StackingArea' marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y1' name='Fair-trade' type='StackingArea' marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y2' name='Veg Alternatives' type='StackingArea' marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y3' name='Others' type='StackingArea' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
