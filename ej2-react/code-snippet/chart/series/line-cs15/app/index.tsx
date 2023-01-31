

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, DateTime, Tooltip, DataLabel, Zoom, Crosshair, StackingAreaSeries,  Selection}
from'@syncfusion/ej2-react-charts';
import { stackedData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = {
    title: 'Years', valueType: 'DateTime', intervalType: 'Years',
    majorTickLines: { width: 0 }, labelFormat: 'y', edgeLabelPlacement: 'Shift'};
  const primaryyAxis: AxisModel = {
    title: 'Spend in Billions', minimum: 0, maximum: 7, interval: 1,
    majorTickLines: { width: 0 }, labelFormat: '{value}B'};

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Trend in Sales of Ethical Produce'>
      <Inject services={[StackingAreaSeries, Legend, Tooltip, DataLabel, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y' name='Organic' type='StackingArea'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y1' name='Fair-trade' type='StackingArea'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y2' name='Veg Alternatives' type='StackingArea'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackedData} xName='x' yName='y3' name='Others' type='StackingArea'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


