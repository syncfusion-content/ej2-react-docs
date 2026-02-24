

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StackingBarSeries,  ISeriesRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { stackBarData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Months' };
  const primaryyAxis: AxisModel = {
    title: 'Percentage (%)', minimum: -20, maximum: 100,
    edgeLabelPlacement: 'Shift', labelFormat: '{value}%'
  };
const  seriesRender = (args: ISeriesRenderEventArgs) => {
  if (args.series.index === 0) {
      args.fill = '#ff4251';
  }
  else if (args.series.index === 1) {
      args.fill = '#4C4C4C';
  }
  else if (args.series.index === 2) {
      args.fill = '#794F1B';
  }
};
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Sales Comparison'
      seriesRender={seriesRender}>
      <Inject services={[StackingBarSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackBarData} xName='x' yName='y' name='Apple' type='StackingBar100'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackBarData} xName='x' yName='y1' name='orange' type='StackingBar100'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackBarData} xName='x' yName='y2' name='Wastage' type='StackingBar100'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


