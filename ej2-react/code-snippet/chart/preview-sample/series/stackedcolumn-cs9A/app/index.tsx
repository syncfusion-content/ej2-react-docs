

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, StackingColumnSeries, IPointRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { stackColumndata } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Years', interval: 1, valueType: 'Category' };
  const primaryyAxis: AxisModel = {
    title: 'Sales in Billions', maximum: 700, interval: 100,
    labelFormat: '{value}B'
  };
  const pointRender = (args: IPointRenderEventArgs) => {
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
      title='Mobile Game Market by Country' pointRender={pointRender}>
      <Inject services={[StackingColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={stackColumndata} xName='x' yName='y' name='UK' type='StackingColumn' cornerRadius = {{topRight: 10 , topLeft: 10}}>
        </SeriesDirective>
        <SeriesDirective dataSource={stackColumndata} xName='x' yName='y1' name='Germany' type='StackingColumn' >
        </SeriesDirective>
        <SeriesDirective dataSource={stackColumndata} xName='x' yName='y2' name='France' type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackColumndata} xName='x' yName='y3' name='Italy' type='StackingColumn' cornerRadius = {{topRight: 10 , topLeft: 10}}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


