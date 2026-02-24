


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, IPointRenderEventArgs,
         RadarSeries, ColumnSeries}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Month' };
  const primaryyAxis: AxisModel = { minimum: 20, maximum: 40, interval: 5, title: 'Efficiency', labelFormat: '{value}%' };
  const pointRender = (args: IPointRenderEventArgs) => {
    if (args.point.index % 2 !== 0) {
      args.fill = '#ff6347';
  }
  else {
      args.fill = '#009cb8';
  }
  }
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Efficiency of oil-fired power production' pointRender={pointRender}>
      <Inject services={[RadarSeries, ColumnSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Radar' name='Department' drawType='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



