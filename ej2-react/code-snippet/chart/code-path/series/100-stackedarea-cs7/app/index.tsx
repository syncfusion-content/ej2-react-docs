{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, DateTime, Tooltip, DataLabel, Zoom, Crosshair, StackingAreaSeries, ISeriesRenderEventArgs
}
  from '@syncfusion/ej2-react-charts';
import { percentData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {
    title: 'Years', valueType: 'DateTime', intervalType: 'Years',
    edgeLabelPlacement: 'Shift', labelFormat: 'y'
  };
  const primaryyAxis: AxisModel = { title: 'Temperature (%)', labelFormat: '{value}%', rangePadding: 'None' };
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
    title='Annual Temperature Comparison' seriesRender={seriesRender}>
    <Inject services={[StackingAreaSeries, Legend, Tooltip, DataLabel, DateTime]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y' name='USA' type='StackingArea100' marker={marker}>
      </SeriesDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y1' name='UK' type='StackingArea100' marker={marker} >
      </SeriesDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y2' name='Canada Alternatives' type='StackingArea100' marker={marker}>
      </SeriesDirective>
      <SeriesDirective dataSource={percentData} xName='x' yName='y3' name='China' type='StackingArea100' marker={marker} >
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
